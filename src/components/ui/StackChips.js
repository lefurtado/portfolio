import styled from 'styled-components';
import { stack } from '../../data/stack';

const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const Chip = styled.span`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    border-radius: ${({ theme }) => theme.radius.full};
    border: 1px solid ${({ theme }) => theme.colors.border};
    background: ${({ theme }) => theme.colors.surface};
    color: ${({ theme }) => theme.colors.text};
    font-size: 12px;
    line-height: 1;
    transition: border-color ${({ theme }) => theme.transition.fast},
                background ${({ theme }) => theme.transition.fast};

    & > span:first-child {
        color: ${({ theme }) => theme.colors.accent};
        display: inline-flex;
        flex-shrink: 0;
    }

    &:hover {
        border-color: ${({ theme }) => theme.colors.accent};
        background: ${({ theme }) => theme.colors.surfaceElevated};
    }
`;

export function StackChips({ items, size = 14 }) {
    return (
        <Row>
            {items.map((key) => {
                const entry = stack[key];
                if (!entry) return null;
                const Icon = entry.icon;
                return (
                    <Chip key={key}>
                        <span>
                            <Icon size={size} />
                        </span>
                        <span>{entry.name}</span>
                    </Chip>
                );
            })}
        </Row>
    );
}
