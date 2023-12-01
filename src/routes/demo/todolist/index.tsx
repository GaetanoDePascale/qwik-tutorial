import { component$ } from "@builder.io/qwik";
import {
  type DocumentHead,
  routeLoader$,
  routeAction$,
  zod$,
  z,
  Form,
} from "@builder.io/qwik-city";
import styles from "./todolist.module.css";

interface ListItem {
  text: string;
}

export let list: ListItem[] = [];

export const useListLoader = routeLoader$(() => {
  return list;
});

export const useAddToListAction = routeAction$(
  (item) => {
    list.push(item);
    return {
      success: true,
    };
  },
  zod$({
    text: z.string().trim().min(1),
  }),
);

export const useRemoveFromAction = routeAction$(
  (item) => {
    list = list.filter(i => i.text !== item.text);
  }
);

export default component$(() => {
  const list = useListLoader();
  const addAction = useAddToListAction();
  const removeAction = useRemoveFromAction();

  return (
    <>
      <div class="container container-center">
        <h1>
          <span class="highlight">TODO</span> List
        </h1>
      </div>

      <div role="presentation" class="ellipsis"></div>

      <div class="container container-center">
        {list.value.length === 0 ? (
          <span class={styles.empty}>No items found</span>
        ) : (
          <ul class={styles.list}>
            {list.value.map((item, index) => (
              <li key={`items-${index}`}>
                {item.text}
                <button  class="button-dark" onClick$={() => removeAction.submit(item)}>
                  Remove item
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div class="container container-center">
        <Form action={addAction} spaReset>
          <input type="text" name="text" required class={styles.input} />{" "}
          <button type="submit" class="button-dark">
            Add item
          </button>
        </Form>

        <p class={styles.hint}>
          PS: This little app works even when JavaScript is disabled.
        </p>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Qwik Todo List",
};
