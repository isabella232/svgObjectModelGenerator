module.exports = {
	"children": [
		{
			"id": "shape-1",
			"type": "shape",
			"visible": true,
			"style": {
				"stroke": {
					"type": "none"
				},
				"fill": {
					"type": "solid",
					"color": {
						"r": 0,
						"g": 169.034796,
						"b": 156.816096,
						"a": 1
					}
				},
				"meta": {
					"PS": {
						"fx": {
							"gradientFillMulti": [
								{
									"enabled": true,
									"mode": "lighten",
									"opacity": {
										"value": 100,
										"units": "percentUnit"
									},
									"gradient": {
										"name": "$$$/DefaultGradient/VioletOrange=Violet, Orange",
										"gradientForm": "customStops",
										"interfaceIconFrameDimmed": 4096,
										"colors": [
											{
												"color": {
													"red": 41.003892,
													"green": 10,
													"blue": 89.003893
												},
												"type": "userStop",
												"location": 0,
												"midpoint": 50
											},
											{
												"color": {
													"red": 255,
													"green": 124,
													"blue": 0
												},
												"type": "userStop",
												"location": 4096,
												"midpoint": 50
											}
										],
										"transparency": [
											{
												"opacity": {
													"value": 100,
													"units": "percentUnit"
												},
												"location": 0,
												"midpoint": 50
											},
											{
												"opacity": {
													"value": 100,
													"units": "percentUnit"
												},
												"location": 4096,
												"midpoint": 50
											}
										]
									},
									"angle": {
										"value": 35,
										"units": "angleUnit"
									},
									"type": "linear",
									"reverse": true,
									"dither": false,
									"align": true,
									"scale": {
										"value": 100,
										"units": "percentUnit"
									},
									"offset": {
										"horizontal": {
											"value": 0,
											"units": "percentUnit"
										},
										"vertical": {
											"value": 0,
											"units": "percentUnit"
										}
									}
								}
							]
						}
					}
				},
				"filter": "filter-1"
			},
			"children": [],
			"title": "Rectangle 2",
			"visualBounds": {
				"top": 50,
				"left": 300,
				"bottom": 150,
				"right": 500
			},
			"shape": {
				"type": "rect",
				"x": 300,
				"y": 50,
				"width": 200,
				"height": 100
			}
		}
	],
	"global": {
		"clipPaths": {},
		"filters": {
			"filter-1": {
				"filterUnits": "userSpaceOnUse",
				"children": [
					{
						"name": "feImage",
						"result": "image-1",
						"input": [],
						"x": 300,
						"y": 50,
						"width": 200,
						"height": 100,
						"preserveAspectRatio": "none",
						"xlink:href": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPSJ4TWlkWU1pZCIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIxMDAiIHZpZXdCb3g9IjAgMCAyMDAgMTAwIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiB1cmwoI2xpbmVhci1ncmFkaWVudC0xKTsKICAgICAgfQogICAgPC9zdHlsZT4KCiAgICA8bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhci1ncmFkaWVudC0xIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjI4LjU5MyIgeTE9IjEwMCIgeDI9IjE3MS40MDciPgogICAgICA8c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjdjMDAiLz4KICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMjkwYTU5Ii8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgY2xhc3M9ImNscy0xIi8+Cjwvc3ZnPgo="
					},
					{
						"name": "feComposite",
						"result": "composite-1",
						"input": [
							"image-1",
							"SourceGraphic"
						],
						"operator": "in"
					},
					{
						"name": "feBlend",
						"result": "blend-1",
						"input": [
							"composite-1",
							"SourceGraphic"
						],
						"mode": "lighten"
					}
				]
			}
		},
		"gradients": {},
		"masks": {},
		"patterns": {},
		"viewBox": {
			"top": 0,
			"left": 0,
			"bottom": 600,
			"right": 800
		},
		"bounds": {
			"top": 0,
			"left": 0,
			"bottom": 600,
			"right": 800
		},
		"pxToInchRatio": 72
	},
	"artboards": {},
	"meta": {
		"PS": {
			"globalLight": {
				"angle": 120,
				"altitude": 30
			}
		}
	},
	"title": "svgGradientOverlay.psd"
}
