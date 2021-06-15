---
title: Progressive Enhancement
order: 3
---

The idea of Progressive Enhancement is that you implement the features of your (web)application in different layers, starting with the most basic one where the main features of your application work without any special additions. Adding layers on top of that to improve the experience that the user is receiving. Adding things like instant form validation or other real-time feedback. This requires client-side JavaScript, but if the user does not have JavaScript enabled (or if something goes wrong), these features should still function.  
&nbsp;  
## Progressive Enhancement is difficult
I was never really thinking about Progressive Enhancement when creating web applications. But during this minor I really tried to progressively enhance as much as possible. Implementing proper Progressive Enhancement is really difficult, you really need to think in a different way since a lot of things are more complex when you want to make them without client-side JavaScript. You still want to add everything that you would normally want to add with client-side JavaScript, but also make it function when the client-side JavaScript is disabled.  
&nbsp;  
## Examples
Below is a simple example of a project that I am currently working on, we use Svelte here but you could do this with any tech-stack. A lot of the logic is missing here but that is not really interesting for this explanation. You can see that we check if we have client-side JavaScript avaiable on row 11, if we do not have it available we show the submit button of the form. If we do have client-side JavaScript available we hide it because the search input automatically updates the list of languages shown below without having to refresh the page. But if we post the form (when we do not have client-side JavaScript available) we add a search query to the URL of the page and render the filtered list of languages on the server-side. This is great because everything still works when you have no client-side JavaScript, but the component gets enhanced when you do have client-side JavaScript available since the page does not have to refresh.
```ts
<form on:submit|preventDefault>
  <label>
    Zoek hier naar talen
    <input
      name="query"
      placeholder="Bijvoorbeeld Nederlands"
      bind:value={filterValue}
      type="search"
    />
  </label>
  {#if !js}
    <Button>Zoeken</Button>
  {/if}
</form>
```
This is how the component looks in the browser, we have the input at the top where you can search for languages and below that you have the (filtered) list of languages that you can select. As you can see we have JavaScript enabled here since we can not see the button that says 'Zoeken' in the window.
![Screenshot 2021-06-15 at 17 37 17](https://user-images.githubusercontent.com/10921830/122082495-579a8b80-ce00-11eb-9322-b78caae70a6b.png)
Here is an example that is a bit more complicated, since we want the user to be able to select up to three languages in the list and add this to their cookies/localstorage so we can do stuff with the data later. When a user has JavaScript enabled we want them to just stay on the page without it refreshing. But it also has to work for users that have their JavaScript disabled. Every language in the list is wrapped in a form element that we can submit to our back-end when we do a POST request. But when the user has their client-side JavaScript enabled we can just store the data into their cookies directly. This logic is located in the 'submitHandler' function, but this does not really add anything to this example and that is why I left it out. As you can see we have a hidden input that stores the language code value. This gets posted to the back-end when the user does not have their JavaScript enabled. Otherwise we handle the logic in the submitHandler function. When the user has their JavaScript disabled we also add the query parameter (if any) to the action URL. This way we can redirect the user back into the same route without them losing their search query.
```ts
{#each languages
  .filter(lang => !chosenLanguages.has(lang.code))
  .filter(lang => !filterValue || lang.name
        .toLowerCase()
        .includes(filterValue.toLowerCase())) as lang (lang.code)}
  <form
    method="POST"
    on:submit|preventDefault={submitHandler}
    action="/api/languages?query={$page.query.get('query')}"
  >
    <input type="hidden" name="code" value={lang.code} />
    <button disabled={chosenLanguages.size >= 3}>
      {#if loading === lang.code}
        <Loader --size="var(--space-xs)" />
      {:else}
        <input disabled={chosenLanguages.size >= 3} type="checkbox" />
      {/if}
      {lang.name}
    </button>
  </form>
{/each}
```
&nbsp;  
## In conclusion
As you can see are there a lot of things to consider when trying to develop all your components progressively enhanced, there are a lot of things that take a lot more code to achieve the desired results. If you would develop everything with the idea in mind that the user always has client-side JavaScript it would be a lot easier to create these kind of components, but not everybody would be able to use your application. This is why you always want to think about Progressive Enhancement when working on big projects where it matters that you support the biggest userbase. Because that is what you are actually doing, most users do have client-side JavaScript available, but you want to make your application work for every single one on any device. And not everyone has the newest tech where everything works like you would expect. This is also [feature detection](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection) is really important. But I won't get into that right now.
&nbsp;  
