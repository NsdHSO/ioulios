<script>
    import {createEventDispatcher} from 'svelte';

    const disaptch = createEventDispatcher();
    /**
     * @type {number}
     */
    export let index;

    /**
     * @type {string}
     */
    export let user;

    /**
     *
     * @param {number}index
     */
    function removeElement(index) {
        disaptch('elementRemove', {
            id: index
        });
    }
</script>

<ul class="scroll-auto ml-4">
  <div
      tabindex="-1"
      role="button"
      class="{index % 2 === 0
			? 'border-blue-500'
			: 'border-amber-700'} border border-solid my-2 border-l-4 rounded px-2 text-xl"
      on:click={() => removeElement(index)}
      on:keydown={()=> console.log('dasmi')}
  >
    {user}
  </div>
</ul>
