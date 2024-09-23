<script lang="ts">
	const navButtonClasses = 'py-3 px-8 text-lg bg-red-100 rounded-xl';
</script>

<nav class="wrapper flex w-full justify-between border-b py-4">
	<div class="flex gap-3">
		<!-- TODO replace anchors with NavButton when done -->
		<a href="/" class={navButtonClasses}>Nav Button 1</a>
		<a href="/" class={navButtonClasses}>Nav Button 2</a>
		<a href="/" class={navButtonClasses}>Nav Button 3</a>
		<a href="/" class={navButtonClasses}>Nav Button 4</a>
	</div>
	<a href="/" class={navButtonClasses}>Sign Out</a>
</nav>
