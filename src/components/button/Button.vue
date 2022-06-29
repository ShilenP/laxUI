<script setup lang="ts">

interface Props {
	size: string
}

const props = withDefaults(defineProps<Props>(), {
	size: 'medium'
})

</script>
<template>
	<div id="outer" :class="size">
		<slot />
	</div>
</template>
<style scoped>
#outer {
	margin: 10px;
	display: flex;
	padding: 10px;
	background: linear-gradient(45deg, #944, #449);
	border-radius: 0 10px 0 10px;
	transition: 100ms ease;
	font-weight: bold;
	color: #999;
	box-shadow: 2px 2px 10px #000;


	-webkit-touch-callout: none;
	/* iOS Safari */
	-webkit-user-select: none;
	/* Safari */
	-khtml-user-select: none;
	/* Konqueror HTML */
	-moz-user-select: none;
	/* Old versions of Firefox */
	-ms-user-select: none;
	/* Internet Explorer/Edge */
	user-select: none;
	/* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
}

#outer:hover {
	border-radius: 10px 0 10px 0;
	box-shadow: 5px 5px 10px #000;
	filter: brightness(1.2);
}

.small {
	height: 20px;
	line-height: 20px;
	font-size: 15px;
}

.medium {
	height: 30px;
	line-height: 30px;
	font-size: 20px;
}

.large {
	height: 40px;
	line-height: 40px;
	font-size: 25px;
}

.x-large {
	height: 50px;
	line-height: 50px;
	font-size: 35px;
}
</style>