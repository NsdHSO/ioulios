<script>
  /**
   * @type {number}
   */
  export let index = 0;

  /**
   * @type {string}
   */
  export let user = '';
</script>

<ul class="scroll-auto ml-4">
  <li
    class="{index % 2 === 0
      ? 'border-blue-500'
      : 'border-amber-700'} border border-solid my-2 border-l-4 rounded px-2 text-xl"
  >
    {user}
  </li>
</ul>
