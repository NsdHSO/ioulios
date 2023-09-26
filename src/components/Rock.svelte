<script>
	import Slider from './Slider.svelte';

	let red = 0;
	let green = 0;
	let blue = 0;
</script>
<div class="flex">
<Slider bind:inputValue={red}/>
<Slider bind:inputValue={green}/>
<Slider bind:inputValue={blue}/>
</div>
{green}
{red}
{blue}
<div class="w-full h-10" style="background: rgb({red}, {green}, {blue})"></div>
