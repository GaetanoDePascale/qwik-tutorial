import { component$ } from '@builder.io/qwik';
import { type DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
	return (
		<>
			<div class='container container-center'>
				<h1>
					<span class='highlight'>Gestione Redazione</span>
				</h1>
			</div>
		</>
	);
});

export const head: DocumentHead = {
	title: 'Gestione Redazione',
};
