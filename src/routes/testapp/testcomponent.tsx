import { component$ } from '@builder.io/qwik';

interface TestComponentProps {
	id: number;
	title: string;
}

export const TestComponent = component$((props: TestComponentProps) => {
	return <p>{props.title}</p>;
});
