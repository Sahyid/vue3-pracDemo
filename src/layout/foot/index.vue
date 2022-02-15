<template>
	<el-footer>
		<div class="footer">
			<div class="ng-promise-box">
				<p class="text">
					<a class="icon1 icon" href="javascript:;">7天无理由退换货</a>
					<a class="icon2 icon" href="javascript:;">满99元全场免邮</a>
					<a class="icon3 icon" href="javascript:;">100%品质保证</a>
				</p>
			</div>

			<div class="github">
				<a href="javascript:;">
					<div class="github-but"></div>
				</a>
			</div>

			<div class="mod_help">
				<p>
					<router-link to="/">我的信息</router-link>
					<span>|</span>
					<router-link to="/shoppingCart">购物车</router-link>
					<span>|</span>
					<router-link to="/">关于我们</router-link>
				</p>
				<p class="coty">商城版权所有 &copy; 2012-2022</p>
			</div>
		</div>
	</el-footer>
</template>

<script setup></script>

<style scoped>
.el-footer {
	width: 100%;
	padding: 0;
}

.footer {
	width: 100%;
	text-align: center;
	background: #2f2f2f;
	padding-bottom: 20px;
}
.ng-promise-box {
	margin: 0 auto;
	border-bottom: 1px solid #3d3d3d;
	line-height: 145px;
}
.github {
	line-height: 50px;
	margin-top: 20px;
}

.github-but {
	width: 50px;
	height: 50px;
	margin: 0 auto;
	z-index: 10000;
}
.icon {
	color: #fff;
	font-size: 20px;
	margin-right: 210px;
	padding-left: 44px;
	display: inline-block;
	line-height: 40px;
	text-decoration: none;
	background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAACCCAYAAAA0eYrlAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEU5RDZFMzVEMEYwMTFFODk0RDVGNEUyNTc3MEY3MjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEU5RDZFMzZEMEYwMTFFODk0RDVGNEUyNTc3MEY3MjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4RTlENkUzM0QwRjAxMUU4OTRENUY0RTI1NzcwRjcyNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4RTlENkUzNEQwRjAxMUU4OTRENUY0RTI1NzcwRjcyNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgWydmUAAAhcSURBVHja7FsJcBRF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')
		no-repeat left 0;
}
.mod_help {
	text-align: center;
	color: #888;
}
p {
	margin: 20px 0 16px 0;
}
span {
	padding: 0 22px;
}
a {
	color: #888888;
	text-decoration: none;
}
a:hover {
	color: #fff;
}
</style>
