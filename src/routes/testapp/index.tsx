import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import styles from './todolist.module.css';
import { TestComponent } from './testcomponent';
import { Clock } from './clock';

export default component$(() => {
	const componentArray = [];

	for (let i = 0; i < 50; i++) {
		componentArray.push(
			<TestComponent id={i} title={`Titolo del componente n° ${i}`} />
		);
	}

	return (
		<>
			<div class='container container-center'>
				<h1>
					<span class='highlight'>Test</span> App
				</h1>
				{componentArray.map((c) => {
					return (
						<>
							<hr />
							{c}
						</>
					);
				})}

				<Clock />
			</div>
		</>
	);
});

export const head: DocumentHead = {
	title: 'Qwik Test App',
};
