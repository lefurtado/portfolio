import { useState } from "react";
import styled from "styled-components";
import {
  FiMail,
  FiSend,
  FiCheck,
  FiAlertCircle,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { Container, Section } from "../ui/Container";
import { Button } from "../ui/Button";
import { Tag } from "../ui/Tag";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 48px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1.1fr;
    gap: 80px;
    align-items: start;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  & h2 {
    font-size: clamp(36px, 5vw, 56px);
    line-height: 1.05;
    color: ${({ theme }) => theme.colors.text};
  }

  & p {
    color: ${({ theme }) => theme.colors.textMuted};
    font-size: 18px;
    line-height: 1.6;
    max-width: 460px;
  }
`;

const Direct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 16px;
`;

const DirectItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 15px;
  transition: color ${({ theme }) => theme.transition.fast};

  & svg {
    color: ${({ theme }) => theme.colors.accent};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 32px;
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.surface};
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  & input,
  & textarea {
    background: ${({ theme }) => theme.colors.bg};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.md};
    padding: 14px 16px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 15px;
    font-family: inherit;
    outline: none;
    transition: border-color ${({ theme }) => theme.transition.fast};
    width: 100%;
    resize: vertical;
  }

  & input:focus,
  & textarea:focus {
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;

const Status = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 14px;
  background: ${({ $kind }) =>
    $kind === "ok" ? "rgba(0,224,184,0.12)" : "rgba(255,92,124,0.12)"};
  color: ${({ theme, $kind }) =>
    $kind === "ok" ? theme.colors.success : theme.colors.danger};
  border: 1px solid currentColor;
`;

export function Contact() {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [state, setState] = useState("idle");

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setState("loading");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (!serviceId || !templateId || !publicKey) {
        await new Promise((r) => setTimeout(r, 1000));
      } else {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: form.name,
            reply_to: form.email,
            message: form.message,
          },
          { publicKey },
        );
      }
      setState("ok");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setState("err");
    }
  };

  return (
    <Section id="contact">
      <Container>
        <Grid>
          <Left>
            <Tag>{t("contact.label")}</Tag>
            <h2>{t("contact.title")}</h2>
            <p>{t("contact.subtitle")}</p>
            <Direct>
              <DirectItem href="mailto:le_furtado@outlook.com.br">
                <FiMail size={18} /> le_furtado@outlook.com.br
              </DirectItem>
              <DirectItem
                href="https://wa.me/5511941198816?text=Olá, Leandro! Gostaria de conversar sobre oportunidades."
                target="_blank"
                rel="noreferrer"
              >
                <FiPhone size={18} /> +55 (11) 94119-8816
              </DirectItem>
              <DirectItem as="span">
                <FiMapPin size={18} /> Santo André, SP
              </DirectItem>
              <DirectItem
                href="https://github.com/lefurtado"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={18} /> github.com/lefurtado
              </DirectItem>
              <DirectItem
                href="https://www.linkedin.com/in/le-furtado/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={18} /> linkedin.com/in/le-furtado
              </DirectItem>
            </Direct>
          </Left>
          <Form onSubmit={onSubmit}>
            <Field>
              <input
                name="name"
                placeholder={t("contact.name")}
                value={form.name}
                onChange={onChange}
                required
              />
            </Field>
            <Field>
              <input
                type="email"
                name="email"
                placeholder={t("contact.email")}
                value={form.email}
                onChange={onChange}
                required
              />
            </Field>
            <Field>
              <textarea
                name="message"
                rows={6}
                placeholder={t("contact.message")}
                value={form.message}
                onChange={onChange}
                required
              />
            </Field>
            <Button
              $variant="gradient"
              type="submit"
              disabled={state === "loading"}
            >
              {state === "loading" ? t("contact.sending") : t("contact.send")}
              <FiSend size={14} />
            </Button>
            {state === "ok" && (
              <Status $kind="ok">
                <FiCheck size={16} /> {t("contact.success")}
              </Status>
            )}
            {state === "err" && (
              <Status $kind="err">
                <FiAlertCircle size={16} /> {t("contact.error")}
              </Status>
            )}
          </Form>
        </Grid>
      </Container>
    </Section>
  );
}
