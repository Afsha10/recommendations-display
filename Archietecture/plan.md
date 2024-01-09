### How does the pg library accept JS variables? How can we use JS variables in our query?

### If we were to create an object could we use a method or function to generate the value of a property like below

````{
  entry_id: 1,
  title: "Frozen",
  mood_types: ["Happy / Joyful", "Whimsical"]
}```

I want my data to look like this:

[
  {
    "entry_id": 1,
    "title": "Frozen",
    "medium_type": "Movie / Film",
    "recommended_by": ["Alexey Orchid", "Daniel Lily"],
    "mood_types": ["Whimsical", "Whimsical", "Happy / Joyful", "Happy / Joyful"]
  },
  {
    "entry_id": 2,
    "title": "Halloween Party at Cath's",
    "medium_type": "Event",
    "recommended_by": "Cathy Rose",
    "mood_types": ["Scary", "Adventure"]
  },...

]
````
