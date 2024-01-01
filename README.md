# recommendations-tracker

Backend: https://recommendations-tracker-backend.onrender.com/entries

Frontend: https://recommendations-tracker.netlify.app/

## Business problem:

People recommend things (books, films, music, events etc.). Sometimes we don't get around to trying them out for a while. We want a website to track those recommendations, and to help us pick things when we're in the right mood for them.

## User roles

We will make a single-user website, with exactly one expected user:

- Collector - someone who receives recommendations, and want to log and track them.

- Each entry will have a unique pair of recommendation and medium

## User stories

- As a collector, I can save a recommendation, including at least the following information:
  - What the thing being recommended is
  - Who made the recommendation
  - What medium of the recommendation is (books, films, music, events)
  - The mood of the recommendation (e.g. upbeat, scary, inspirational)
    - one entry can have multiple moods and vice versa
    - one entry can be recommended by multiple people and vice versa
