import { fireEvent, render, screen } from "@testing-library/react";
import PostComments from "../..";

describe('Teste para o Componente PostComments', () => {
    test('Renderizar componente corretamente', () => {
        render(<PostComments />)
        expect(screen.getByText('Comentar')).toBeInTheDocument()
    });

    test('Adicionar comentário', () => {
        render(<PostComments />)

        fireEvent.change(screen.getByTestId('comment-area'), {
            target: {
                value: "Comentário de Teste número um."
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        fireEvent.change(screen.getByTestId('comment-area'), {
            target: {
                value: "Comentário de Teste número dois."
            }
        });
        fireEvent.click(screen.getByTestId('comment-button'));

        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    })
})
