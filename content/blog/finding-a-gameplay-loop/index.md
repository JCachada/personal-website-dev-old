---
title: "Dev Diaries #1: Finding a Gameplay Loop"
tags: ["blog", "game", "gamedev"]
date: "2020-05-02"
description: "Most people struggle with having too many ideas they can't turn into reality. But what happens when the opposite is true?"
---

I understand stories better than I understand game design.

That's the crux of current problem with developing my game. I know precisely what story I want to tell and what themes I want to approach - but any game must have a somewhat defined recurring gameplay loop which makes up for the bulk of the player's experience. Coming up with that central gameplay loop is harder than it sounds, at least for me. In this post I'll attempt to make clear what my thought process is on this matter, and why I don't just slap some gameplay onto the game. I will also attempt to make this post into a decision log of sorts, where I lay out the options I've identified so far and their respective pros and cons. Hopefully this process will introduce some clarity, or at the very least it will serve as an historical document.

## What to aim for

First of all, the central gameplay loop must be enjoyable. This might seem like a very obvious thing to say, but I think it's important that this is the first consideration. Above all, players must like playing the game. I have often seen games put their intended message and artistic merit above player enjoyment. Just recently I played a very interesting narrative driven game that was riddled with issues because it just wasn't fun to play, even though the story was very engaging. While I can't presume to know how the development process went for that particular game, I definitely felt like they made the game serve the story they wanted to tell, and came up with something that just wasn't enjoyable to play; or at least, not for me.

This isn't to say gameplay can't serve the narrative. Visual novels and walking simulators, for instance, are enjoyable to the audience they target, explicitly because the gameplay, simple as it may be, serves a particular purpose to enable the narrative and experience they want to provide.

Which brings me to my second point: the gameplay must be coherent with the narrative themes, and ideally enhance them. At the very least, it shouldn't directly contradict them. _Undertale_ would be a much worse game if, instead of a dodging game reminiscent of old SHMUP experiences, it had traditional 2D side scrolling combat. Ideally, the gameplay loop would directly tie into the narrative experience and enhance it: _Dark Souls_, for instance, is a game for which a brutal, opressive combat system decidedly makes sense, and enhances the brutal, opressive atmosphere of a decaying world.

The third point is a bit more controversial: it should be in some way new. That doesn't mean coming up with some new way of interacting with the game entirely. New gameplay mechanics are hard to come by, and the returns on coming up with them are often diminished by the learning curve required with having to introduce players to new mechanics. Everyone can play a platformer: the collective cultural experience that everyone sort of has about video games makes a platformer very easy to understand. But that doesn't mean you can't improve on _Super Mario Brothers 2_.

This is, of course, a more personal point. If my central focus is narrative, I could just pick an existing gameplay loop and implement the one that better served the narrative I want to tell. And I might still do just that - but if I do, I personally want to iterate on it in some way. Game development is not only a narrative process in artistic terms, but also a creative process in terms of the actual game aspect of it. I don't think I'd be happy with my game if I didn't try to improve upon whichever gameplay loop I end up choosing, even if it's just a small incremental improvement. I strongly believe in iteration: even mechanics as simple as those found in walking simulators can be improved upon.

So, to sum up, here's what I'm looking for in terms of the main gameplay loop is:

 <ol style="padding-left:30px">
  <li>An enjoyable gameplay loop that...</li>
  <li>... Does not directy contradict, and ideally enhances the narrative experience, while...</li>
  <li>... Improving upon at least some of the existing implementations of similar gameplay loops. </li>
</ol>

With that in mind, let's go through each gameplay loop I think is available to me and try to figure out some pros and cons for each one.

## Card Game or Card / Puzzle Game Hybrid

Considering I was once a professional card game player, designing a card game would probably be my first instinct. It's a subject I know very well, it's something I can be reasonably creative in, while not feeling completely out of my depth. It's also something that would not be tremendously hard to implement on the tech side. Like with sidescrolling combat, the hardest thing to implement would almost surely be enemy AI, but even then there are excellent resources available on how to implement card game enemy AI: *Prismata*, for instance, has done excellent work on it.

Of course, a card game is generally not suited to single-player narrative driven experiences, considering how dependent the genre is on stuff like evolving metas and deckbuilding capabilities. Fortunately, games like *Thronebreaker: The Witcher Tales* have already introduced a puzzle / card game hybrid that maintains some of the best things about card games (the puzzles, trying to decide what the correct play at any given time is) that works well for single-player.

I see two cons to this main gameplay loop. First of all is that it doesn't seem to serve the narrative in any way. The game is broadly about corruption vs kindness, and how people react in desperate situations. To do it with a card game would imply finding a way to make the gameplay play to those themes. While possible, this isn't immediately easy or obvious.

The second con is the art expense. Card games in general have excellent art. *Magic The Gathering*'s art is legendary, *Gwent* had extremely high quality art, and in general the card game audience has very high expectations in what concerns the quality of their card art. This would make it hard to meet those expectations with my available funds: after all, top tier artists are expensive, a card game demands a very high quantity of good art, and this is an indie, hobby level project. The investment would not just be hard to justify, but hard to make happen in the first place.

## Walking Simulator / Visual Novel

When one wants to make a game and call it narrative-driven, there is always the question of whether or not to make it limited in actual gameplay mechanics, and make it instead a visual novel or a walking simulator. Those games are, in fact, often associated with a heavier focus on narrative, because there are no other mechanics in it to compete with the story: the game lives and dies on its plot and characters. I include in this section games that have very limited gameplay mechanics, like *To The Moon*, which I love.

The biggest con for this type of approach is the "enjoyable" bullet point. A lot of people just don't like visual novels. Walking simulators are a polarizing genre, with people often arguing they're not even games. If I wanted to maximize the audience I can reach, perhaps walking simulators and visual novels needlessly restrict me from the getgo.

That being said, I don't think making decisions based on whether or not something is too niche is particularly productive, especially because I'm someone trying to develop a game I'm proud of, and not a mega-corporation trying to maximize profits. Because of that, the central question is just whether or not I'd be happy making a walking sim or a visual novel. They tend to be less challenging on the technical aspect than other games, and while I coded systems like saved games myself (instead of using engines like Ren'Py), I feel like I'd still have to find ways to challenge myself with new features and ways to iterate on the visual novel / walking sim formula to be happy with the end product.

## Platformer

I don't particularly enjoy platformers, so it's easy for me to dismiss this option, as I want to work on something I'm personally engaged by. However, for the sake of the exercise, I'll still go through the pros and cons.

Platformers are easy to iterate on and there's tons of stuff I could introduce to try and make the experience varied and unique. They also have a very large amount of data available on how to code different aspects, available from different games and their tutorials.

On the con side, they're probably the most overcrowded genre on the indie market right now. Everyone makes platformers, and lots of players aren't willing to give yet another new platformer a try. They want something new. If I wanted to make a platformer, I'd have to find a differentiating factor, like *Ori and the Blind Forest* did with its artstyle. But it would have to come from the mechanics side of it, as I would never have the budget to throw at the game to make it stand out on its art alone.

## 2D Roguelike Combat: Either Side-scrolling or Top-Down

This was my initial instinct when starting the development process. It just felt natural to me, and I feel like that comes from an inclination that I have from my playing experiences: that having bad guys you fight with several different tools is the basic gameplay loop mostly everyone is familiar with.

There are some downsides, however. The technical aspect of coding combat can be seen as a boon and a challenge. It took me almost a month to code a basic enemy AI that just chases the player character around shooting stuff at him when it gets within a certain range. This is a very slow pace, and combat AI is something it'd take me a long time to learn and code, probably. I've looked into how games like Rimworld and Left 4 Dead 2 do their AIs, and there's a lot to unpack there. But even though it might be biting off more than I can chew, I also can't help but feel excited by it. It's an interesting subject, and one I'd like to try and tackle.

Perhaps the biggest downside besides that is the animation cost. Whereas other genres would have limited costs in terms of walking / jumping animations for the characters and then punctual cost for special animations as needed, a combat-heavy game would have exponentially higher cost: animations for every mob, their different moves, the player character's different moves, potential new weapons... All of this would have to be purchased, or I'd have to learn to draw it myself. Either way this would mean a large increase in the development cost for the game.

## Next steps

So, now that I've listed the options... What comes next?

For the next month, and until it is done, my priority will be the book I've been working on for the last year. That means that, when my time is limited and I have to choose, I'll work on the book first, and only give the game my full attention when the book is done. The reason I say this is that I'm fully aware that I might not finish what I'm about to propose in time, and that's okay.

But the next steps will be building a Proof of Concept for each of the gamemodes above, and try and see how I'd implement them in a scene. In that scene, focus on how I'd try and answer some of the questions I asked myself here, like the questions about differentiation for some of the genres. With the working POCs in hand I'll be able to make a more informed decision on which path to take for the entire game. Perhaps I'll even find a compromise and use bits and pieces of them. Time will tell.

But that's the deliverable for the next dev diary: I'll report back on how the development is going for the different POCs, with the forewarning that they'll be on the back burner until I'm done with the book.