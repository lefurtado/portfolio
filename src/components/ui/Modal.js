import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components';
import { FiX } from 'react-icons/fi';

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const slideUp = keyframes`
    from { opacity: 0; transform: translateY(20px) scale(0.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
`;

const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    animation: ${fadeIn} 200ms ease-out;
`;

const Panel = styled.div`
    position: relative;
    width: 100%;
    max-width: 960px;
    max-height: calc(100vh - 32px);
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.radius.xl};
    overflow: hidden;
    display: flex;
    flex-direction: column;
    animation: ${slideUp} 280ms cubic-bezier(0.22, 1, 0.36, 1);
`;

const ScrollArea = styled.div`
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    overscroll-behavior: contain;

    &::-webkit-scrollbar {
        width: 8px;
    }
    &::-webkit-scrollbar-track {
        background: transparent;
        margin: 4px 0;
    }
    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.border};
        border-radius: 999px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.colors.borderStrong};
    }
`;

const Close = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    z-index: 10;
    width: 40px;
    height: 40px;
    border-radius: 999px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surfaceElevated};
    color: ${({ theme }) => theme.colors.text};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: border-color ${({ theme }) => theme.transition.fast},
                color ${({ theme }) => theme.transition.fast};

    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        color: ${({ theme }) => theme.colors.accent};
    }
`;

export function Modal({ open, onClose, children }) {
    useEffect(() => {
        if (!open) return undefined;
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', onKey);
            document.body.style.overflow = prev;
        };
    }, [open, onClose]);

    if (!open) return null;

    return createPortal(
        <Overlay onClick={onClose}>
            <Panel onClick={(e) => e.stopPropagation()}>
                <Close onClick={onClose} aria-label="Close">
                    <FiX size={18} />
                </Close>
                <ScrollArea>{children}</ScrollArea>
            </Panel>
        </Overlay>,
        document.body,
    );
}
