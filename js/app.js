var $placeHolder = $("#placeholder"),
		handlebarsTemplate = $("#handlebars-template").html(),
		templateCompile = Handlebars.compile(handlebarsTemplate),
		data = {
			"about" : [
				{
					"name":"Your name",
					"title":"Design & Development",
					"tagline" : "Wheeeeeee (*^▽^*)/ TORONTO"
				}
			],
      "greeting" : [
        {
          "intro":"Hi~",
          "bio":"blahblahblah gud copy",
          "status": "Currently in "
        }
      ]
		}

		$placeHolder.html(templateCompile(data));
