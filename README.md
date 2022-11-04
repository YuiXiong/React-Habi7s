# React-Habi7s
A to-do list app inspired by 7 habits of highly effective people Habit 3 and trello's drag and drop UIUX

## Link to demo site
BE - https://be-habi7s.herokuapp.com/
FE - https://yuixiong.github.io/react-habi7s/

## Technologies used
MERN stack
Mongoose
DND-KIT - https://dndkit.com/

## Database Schema
https://docs.google.com/spreadsheets/d/10kkmvSsHJaQbrHZyyhgspySawX4Uj-BSGG-VM06Jxp0/edit#gid=1701417897

## Routes
https://docs.google.com/spreadsheets/d/10kkmvSsHJaQbrHZyyhgspySawX4Uj-BSGG-VM06Jxp0/edit#gid=0

## Wins
- Played around with Figma finally, understood why adobe bought it over for 20bil.
- Troubleshooting the current stack gets easier along the way.
- Toyed around with DND-KIT.
  
- ## Difficulties
- Manipulating DOM, although not as bad as last time. 
- Relied too much on statelifting giving children far away problems.
- Difficulty understanding documentation on what I need to build what I want

- ## Technical challenges
- Lack of understanding on whats going on in a to do list app with drag and drop features. Thought a drag and drop feature actually takes just generally useContext, pickup, useDrag, useDrop to execute. Apparently theres way more going on. (trello cost 425mil O.o!)
  
- ## Improvement for the future
- Board Schema shall have 4 catagories each holding an array of objectIDs for tasks instead of 1. This remove the use of Enums and should synergise better with sortableContext.
- React app structure differently so I avoid statelifting from child to parent to another child, after which make api call and pass data as props and app crashes again Zz..


