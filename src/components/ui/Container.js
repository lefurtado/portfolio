import styled from 'styled-components';
import { useInView } from '../../hooks/useInView';

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;

    @media (min-width: 768px) {
        padding: 0 40px;
    }
`;

const SectionEl = styled.section`
    padding: 96px 0;
    position: relative;
    opacity: 0;
    transform: translateY(24px);
    transition: opacity 700ms cubic-bezier(0.22, 1, 0.36, 1),
                transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
    will-change: opacity, transform;

    &[data-visible='true'] {
        opacity: 1;
        transform: translateY(0);
    }

    @media (min-width: 768px) {
        padding: 140px 0;
    }

    @media (prefers-reduced-motion: reduce) {
        opacity: 1;
        transform: none;
        transition: none;
    }
`;

export function Section({ children, ...props }) {
    const [ref, inView] = useInView();
    return (
        <SectionEl ref={ref} data-visible={inView} {...props}>
            {children}
        </SectionEl>
    );
}
