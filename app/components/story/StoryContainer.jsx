"use client";

import { useEffect } from "react";

import { useMusic } from "../music/MusicProvider";

import StoryScene from "./StoryScene";

const scenes = [

  {
    image: "scene1.png",

    text: `Some memories begin
before we understand them.`,

    desktopTextPosition: "bottomLeft",
    mobileTextPosition: "bottomCenter",
  },

  {
    image: "scene2.png",

    text: `The happiest moments
never knew they were important.`,

    desktopTextPosition: "rightCenter",
    mobileTextPosition: "bottomCenter",
  },

  {
    image: "scene3.png",

    text: `For a while,
the world felt smaller
when you were close.`,

    desktopTextPosition: "leftCenter",
    mobileTextPosition: "bottomCenter",
  },

  {
    image: "scene4.png",

    text: `We smiled at the screen
like the story already belonged to us.`,

    desktopTextPosition: "bottomRight",
    mobileTextPosition: "bottomCenter",
  },

  {
    image: "scene5.png",

    text: `I woke up early
just to see you a little longer.`,

    desktopTextPosition: "bottomLeft",
    mobileTextPosition: "bottomCenter",
  },

  {
    image: "scene6.png",

    text: `They were still trying to hold on
while life was already pulling them apart.`,

    desktopTextPosition: "bottomRight",
    mobileTextPosition: "bottomCenter",
  },

  {
    image: "scene7.png",

    text: `Some absences
slowly become part of the room.`,

    desktopTextPosition: "bottomRight",
    mobileTextPosition: "bottomCenter",
  },

  {
    image: "scene8.png",

    text: `At first, the waiting still felt hopeful.
Later, it only felt familiar.`,

    desktopTextPosition: "bottomRight",
    mobileTextPosition: "bottomCenter",
  },

  {
    image: "scene9.png",

    text: `I searched for you,
in every road that once led to us.`,

    desktopTextPosition: "bottomRight",
    mobileTextPosition: "bottomCenter",
  },

  {
    image: "scene10.png",

    text: `Eventually,
the silence started sitting beside me.`,

    desktopTextPosition: "bottomRight",
    mobileTextPosition: "bottomCenter",
  },

  {
    image: "scene11.png",

    text: `You asked me why
I didn’t wait for you...

I wish
you had asked me that
years ago.

I would have fought
the whole world for you.`,

    desktopTextPosition: "bottomRight",
    mobileTextPosition: "bottomCenter",
  },

  {
    image: "scene12.png",

    text: `Maybe
life was only
taking the longer road
back to each other.`,

    desktopTextPosition: "bottomRight",
    mobileTextPosition: "bottomCenter",
  },

  {
    image: "scene13.png",

    text: `Maybe we were late
for the life we wanted.

But not too late
to spend the last of it
together.`,

    desktopTextPosition: "bottomRight",
    mobileTextPosition: "bottomCenter",
  },

];

export default function StoryContainer() {

  const { playTrack } = useMusic();

  useEffect(() => {

    playTrack("/music/story.mp3");

  }, []);

  return (
    <main
      className="
        h-[100svh]
        overflow-y-scroll
        snap-y
        snap-mandatory
        bg-black
      "
    >

      {scenes.map((scene, index) => (

        <StoryScene
          key={index}
          scene={scene}
        />

      ))}

    </main>
  );
}