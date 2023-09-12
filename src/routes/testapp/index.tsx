import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';
import styles from './todolist.module.css';

export default component$(() => {
	return (
		<>
			<div class='container container-center'>
				<h1>
					<span class='highlight'>Test</span> App
				</h1>
			</div>
		</>
	);
});

export const head: DocumentHead = {
	title: 'Qwik Test App',
};
