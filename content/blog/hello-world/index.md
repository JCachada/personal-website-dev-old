---
title: "Mission Statement: This blog, the website, and more."
date: "2029-03-26T18:57:03.284Z"
description: "A description of the purpose of this blog and things that are to come."
---

In 2013, I went to college. I didn't really know what I wanted to go to college for, and I ended up choosing Philosophy as a major because I thought it would give me a broad spectrum of skills and sort of postpone the actual decision of what I wanted to do with my life.

Philosophy is a great major. I'm very grateful for the things that I learned there, and I wish the state of humanities' academia in Portugal wasn't such that even the most skilled of students have no place at universities and aren't particularly valued by the private sector. But that was the case, and I soon realized that I would have a very hard time finding a job related to my studies.

I am not, however, someone who likes to wait idly for things to get better. So I tried to figure out how I could leverage my work and the things that I liked into a proper career. At first that meant getting a Master's in American Literature and American Culture. I thought I could at least get a job as a translator while I looked for something better, and surely a Master's degree completed with honors would mean something.

But before I could give academia a real try, I realized what I was actually passionate about. In my Philosophy B.A., I specialized in Logics. In my Master's, I gave special emphasis to American Literature. What do those have in common, and what do they have in common with what I ended up doing?

The conclusion I came to was that what I really liked was stories; and that I wanted to do something related to them in some way, shape or faction. But I also found that working as a literature analyst was in a way oppressive. I missed seeing the real impact of the things I was doing, and it can be hard at times with literature to be sure what you do matters. 

That's when I started coding.

My skills in Logics, that I'd gotten during my BA, helped me a lot with getting into code. I did a bootcamp, I practiced a lot, and I found out that not only was I good at it and enjoyed the puzzle solving, as well as the fact that my code's impact in the world was often clear and measurable, writing code was actually quite a bit like storytelling.

## Coding as Storytelling

As I wrote and, especially, read more code, I realized a great part of the problems in programming came down to mistakes in communication, ambiguities that weren't properly removed, things being overly verbose, or problems in a similar vein. Most production level systems ran by competent teams don't really have critical level bugs that are caused by a massive oversight in logics, or someone entirely missing the logical foundation for a problem. Processes like code reviews, thorough testing habits, and general good practices do a good job of curbing those. Yet the problems I found the most often were the ones that eluded code reviews, because people no longer paid attention to them; the ones that got through testing, because it wasn't clear what the test was doing, and we thought that a condition was being tested when it wasn't; or the ones that don't trigger the alarms because people simply don't notice them. 

Code must be readable. Not just to save the time of developers that come after and try to read it, but because if it isn't, they won't read it properly. And that will invariably lead to lost time, money, mental health, and generally a bunch of really avoidable problems.

It's generally not very controversial to say that code must be readable, and I'm glad that's the case - even though executing on this principle is often harder than naming it. But I think we should go a step further, and say not just that code must be readable: it must be *engaging*. People pay more attention to books they find interesting. People pay more attention to code they're engaged by. If your code is readable, but not particularly engaging, you run the risk of people's mind drifting, and them missing something important in your code. When I started coding after years of researching literature, I tried to apply several principles of how you make a good story to how I write my code - to generally good results.

Think of the following code I wrote for one of my games to handle an enemy's movement:

```python

func _process(delta):
	if mobHealth <= 0:
		queue_free();
	
	if stopMoving: 
		return;
	
	startPosition = position
	endPosition = player.position
	if(player.position.x > position.x): 
		$ProperAnimation.flip_h = true;
	else:
		$ProperAnimation.flip_h = false;
	_update_path()
	if path.size() > 1:
		var to_walk = delta * speed
		while to_walk > 0 and path.size() >= 2:
			var pfrom = path[path.size() - 1]
			var pto = path[path.size() - 2]
			var d = pfrom.distance_to(pto)
			if d <= to_walk:
				path.remove(path.size() - 1)
				to_walk -= d
			else:
				path[path.size() - 1] = pfrom.linear_interpolate(pto, to_walk/d)
				to_walk = 0
		
		var atpos = path[path.size() - 1]
		position = atpos
		
		if path.size() < 2:
			path = []

```

Once you get into the actual logics of things, I bet you lost interest halfway through the function.

But if you try and tell a story with it and do so by extracting the logic in order to not harm the story's flow with a tangent, this is what you get:

```python
func _process(delta):
	if mobHealth <= 0:
		queue_free();
	
	if stopMoving: 
		return;

	startPosition = position
	endPosition = player.position
	if(player.position.x > position.x): 
		$ProperAnimation.flip_h = true;
	else:
		$ProperAnimation.flip_h = false;
	_update_path()
	moveThroughPath(path)

func moveThroughPath(path):
    if path.size() > 1:
		var to_walk = delta * speed
		while to_walk > 0 and path.size() >= 2:
			var pfrom = path[path.size() - 1]
			var pto = path[path.size() - 2]
			var d = pfrom.distance_to(pto)
			if d <= to_walk:
				path.remove(path.size() - 1)
				to_walk -= d
			else:
				path[path.size() - 1] = pfrom.linear_interpolate(pto, to_walk/d)
				to_walk = 0
		
		var atpos = path[path.size() - 1]
		position = atpos
		
		if path.size() < 2:
			path = []
```

This way you declutter the actual method that's telling the story - and whoever's invested in it enough to want to get into the nitty gritty, instead of just getting an idea of how the system works, can go to the secondary method ´moveThroughPath´ and find out. 

This isn't revolutionary. Lots of very well established names in programming advocate for similar results through other names - for instance, Robert C. Martin's *Clean Code* argues in favor of a similar extraction on the basis that functions should have a single responsibility, and orchestration is already a responsibility. If you follow that rule, you generally get similar results. 

However, I haven't often seen it formulated in terms of storytelling. Perhaps because it's less useful to people that don't have my background or a similar interest in stories. For me, it helps to think of code that way. You wouldn't want a novel to suddenly stop the thread of the main intrigue in its path to tell you about how the main character's sword was made. So why should code break the narrative flow in such a way? Thinking of code in this way has allowed me to translate a lot of my skills in other areas to the activity of writing code. Of course, there's more that I use in my day to day - I have a deep understanding of complex logics which helps with the algorithmic aspects of code, and the communication and speech skills acquired by reading, presenting at conferences, etc have a real practical application in the software world, where you must and should still interact effectively with people. 

## Mission statement

After the above, the mission statement shouldn't come as a surprise. I want to write good stories. I want to *tell* good stories. Stories are fundamentally a way to connect with other people, and I believe code acts as a facilitator for precisely that. Good code lets people connect, be it by enabling thriving businesses or by letting developers separated by time, different backgrounds and different interests to read code they didn't write, add to it, and build something together. 

That's not to say I've forgotten stories themselves. As much as I love coding, I also like writing. And I want to connect with people in ways that are meaningful to me, and in ways that people have connected with me and impacted me before. That's why I also write actual novels and short stories, and why I take an active interest in game development as a medium for telling stories. 

I'll post about writing, software engineering, game development, and general life. This will function as my personal hub on the internet.

Stories are my passion. You can explore mine in this website. I look forward to connecting with you! 