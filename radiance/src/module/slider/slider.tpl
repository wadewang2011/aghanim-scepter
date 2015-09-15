<!-- target: slider -->
<!-- for: ${sliderContent} as ${content} -->
<section class="slider-item">
	<div class="item-content">
		<a href="${content.link}"></a>
		<div class="">
			<h1>${content.title}</h1>
			<h2>${content.detail}</h2>
			<a href="${content.link}"></a>
		</div>
		<div>
			<figure>
				<div></div>
			</figure>
		</div>
	</div>
</section>
<!-- /for -->
<nav>
	<!-- for: ${sliderContent} as ${content}, ${index} -->
	<li value="${index}">
		<a></a>
	</li>
	<!-- /for -->
</nav>