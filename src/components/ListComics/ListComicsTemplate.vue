<template>
	<div class="list">
		<h1>Heroes List</h1>
		<v-jstree :data="asyncData" :async="getComics" show-checkbox multiple allow-batch whole-row @item-click="itemClick"></v-jstree>
	</div>
  
</template>
<script src="./ListComicsComponent.js"></script>
