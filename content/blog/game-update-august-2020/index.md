---
title: "Dev Diaries #4: August Update - Implementing a Save Game System"
tags: ["blog", "game", "gamedev"]
date: "2020-08-16"
description: "An update on the state of the game as of August 2020, in the form of an implementation overview for saving and loading games."
---

As I'm still deep in working on my book to meet my goal of having it ready this year, I didn't make any progress on the game this month. I will therefore spend some time explaining how I implemented a rudimentary save / load game system in the game, as that's a central part of any gaming experience. 

## The problem 

Players make progress when playing a game - they discover new locations, get new items, gain XP and stats, and talk to new people. All of these changes, to a varying degree, must be persisted between play sessions. The player must not lose any progress if he turns off the game and then turns it back on again; this would make finishing the game very hard as soon as it had any degree of complexity, and it would demotivate players from investing time into it. 

The problem is especially true in a story driven game where your choices impact the plot: those choices cannot be lost, as they're central to the narrative that you're going to experience. So, how do you go about implementing a save game system? I decided to give it a go myself, as with most things in the game, to see if I could figure it out.

## Breaking down the problem

The first thing I did was attempt to break down the problem. What exactly did I need to save? Certainly, what level the player was in. Also, the characteristics of the player character; finally, the choices the player had made so far in conversation. 
These all seemed relatively simple to store in a file on the user's system, and so I only had to choose an easy format to store the data in. For convenience's sake, I chose JSON. 

I created a global file, called **playervariables.gd**, and used it to store all the data related to the player that I wanted to save between sessions. It ended up looking like this:

```python
	
## This node is used to store variables that need to persist between multiple scenes. 
## It's effectively responsible for handling saved games.

var currentScene; # The scene the player was in at the time of saving.
var playerHealth = 100; # The health of the player character.
var kickedChest = false; 
var counter = 0;

## Global story events / artifacts

var wifeComfort = 0;
var wifeDread = 0;

## Node 00 Variables:

var talkedToElders = false;
var kidCutscenePlayed = false;
var sawCutsceneInsideHome = false;
var stayedWithWife;

func save(fileName):
	## Create the dictionary with the data we want to save.
	var save_dictionary = {
		"fileName": fileName,
		"filePath": "user://savegame" + counter as String + ".save",
		"currentScene": currentScene,
		"kickedChest": kickedChest,
		"playerHealth": playerHealth,
		
		## Story / Scene Events Artifacts
		
		"wifeComfort": wifeComfort,
		"wifeDread": wifeDread,
		
		## Node00_Tutorial
		
		"talkedToElders": talkedToElders,
		"kidCutscenePlayed": kidCutscenePlayed,
		"sawCutsceneInsideHome": sawCutsceneInsideHome,
		"stayedWithWife": stayedWithWife
	}
	## Write the data to a file.
	var saved_game = File.new();
	if fileName.begins_with("autosavegame"):
		saved_game.open("user://autosavegame" + counter as String+ ".save", File.WRITE);
		saved_game.store_line(to_json(save_dictionary));
		saved_game.close();
	else:
		saved_game.open("user://" + fileName + ".save", File.WRITE);
		saved_game.store_line(to_json(save_dictionary));
		saved_game.close();
	counter = counter + 1;
	print(OS.get_user_data_dir()); # Debug line to navigate to the folder with file explorer.

func load(filePath):
	var counter = 0;
	var loaded = false;
	## Try to open the saved game we selected. TODO Needs a way to handle failure.
	var saved_game = File.new();
	saved_game.open(filePath, File.READ);
	## Load all the variables into this singleton.
	while not loaded:
		var currentLine = parse_json(saved_game.get_line());
		var keys = currentLine.keys();
		var values = currentLine.values(); 
		for key in keys:
			player_variables.set(keys[counter], values[counter]);
			counter = counter+1;
		loaded = true;
	## Data loaded successfully.
	get_tree().change_scene(currentScene);
	return;

func saves_Exist():
	## Navigate to the save file directory.
	var directory = Directory.new();
	var userDir = directory.open("user://");
	if userDir != OK: ## Something might be wrong with the directory.
		return false;
	## Now we check the files inside the directory.
	elif userDir == OK:
		var files = directory.list_dir_begin();
		## If there are no files, there are no save games.
		if files != OK:
			return false;
		## If there are files, look for files with the .save extension.
		while true:
			var file = directory.get_next();
			if file.ends_with(".save"):
				return true;
			if file == "":
				break;
		## If there are no files with a .save extension, there are no saved games.
		directory.list_dir_end();
		return false;

func get_All_Saves():
	var files = [];
	## Navigate to the save file directory.
	var directory = Directory.new();
	var userDir = directory.open("user://");
	var dirFiles = directory.list_dir_begin();
	# If it's a save file, append it. Ignore hidden files.
	while true:
			var file = directory.get_next();
			if file == "":
				break;
			elif not file.begins_with(".") && file.ends_with(".save"):
				files.append(file);
	directory.list_dir_end();
	return files;
```

By having the player variables stored here, I can easily access them from every scene when something happens that should change them. For instance, if you're mean to your wife, I can do something like:

```python
playervariables.WifeComfort = playervariables.WifeComfort-10;
```

From any scene in the game. Then, when the player saves the game, that value will be saved onto a JSON file in the user directory; and when the player loads a game, I'll simply parse the values back onto their respective variables, and load the player into the correct scene. All the dialogue and other aspects of the game will react appropriately, because all of their checks will be using the variables in **playervariables.gd** to verify a certain condition.

The function `saves_exist()` needs to be there for UI purposes. When a player hits "Load Game", I need to be able to tell if there's any saved games available for me to show; if not, a different pop-up must indicate that. This function allows me to do that by checking for files with a .save extension, which I decided would be clear enough for the game's save files, even though they're glorified JSON files. This way I avoid any misunderstandings where an invalid JSON gets caught up in the listing of saved games available to load.

`get_all_saves` allows me to list the saved games in a UI for the player to choose from. Right now this UI is a simple Godot list showing all of the saved games, but it can easily turn into a full blown loading screen. If I wanted to, I could even save a screenshot of the viewport at the moment of saving, so that upon loading them I could show each saved game with a picture of the place they left the player in.

## The downsides

There are two main downsides to this approach; one isn't really a big deal, the other might be.

The one that isn't really a big deal is that saved games are easily manipulated. Since they're just JSON files here, that means anyone can open them with a text editor and change the values; so if you wanted to trick the game into giving you 100 in WifeComfort or into thinking you talked to someone you didn't, you could. I don't really mind this, because this is meant to be a single player game; so if players want to manipulate their experience, let them. I'm not one to restrict what they want to do with the game - as long as the game I ship doesn't break by default, players breaking it is something I'm perfectly fine with.

The downside that might be a big deal is maintainability. With this approach, every event I want to keep track of needs to be a variable in the dictionary / file I'm saving. If the game grows big enough, this could be hell to manage. Imagine several different variables saying much the same thing: `talkedToFirstChest`, `talkedToSecondChest`, `wasMeanToThirdChest`, and so on. These would all have to be managed both there and throughout the code, which can be very complex.

I have somewhat tried to mitigate this second downside by dividing the file clearly by node for easy navigation, but it is still a concern I have. Still, this implementation seems to solve the problem of saving and loading games well enough for now; so I'll just have to think up an alternative if it ever becomes a problem. 

## Acknowledgement

Most of the assets you see in the proof of concept are free assets I'm using for mocking purposes, and they come from itch.io. You can find several free asset packs to work with there, although most of them require crediting if you end up using them in your end products.

## What's next?

Next month I'll either write a new blog post on the implementation of another core system or, if I make any progress on the proof of concept for other gameplay loops, outline those, much like I did here for saving games. As usual, the development of the game has somewhat stagnated, as the book takes precedence this year.

If you have any questions, comments or feedback, feel free to reach out to me through any of the channels I make available in the About page; and if you want to give a more in-depth look to the code, you can check my github, linked in the footer. Bear in mind all of this details my journey in self-teaching both Godot and game development, so I'm sure some of the ways I handle things are not optimal. It's part of the learning process.