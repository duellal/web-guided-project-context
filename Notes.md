## State/Prop Drilling:
#### Pros:
- Easy to set up
- Easy to modify 

#### Cons:
- No seperation of cocerns
- Gets messy when app is big - when spread across multiple components
   - Hard to keep code DRY

#### Recommendation: 
- Only use for smaller projects or when state is only used within one component


## Reducers + Redux:
#### Pros:
- Has seperation of concerns - multiple files for specific purposes
- Reducers are easy to read
- "Easy" to add features
- Can connect to any state

#### Cons:
- Lots of moving parts - can be more complicated to add one state/feature b/c of the seperation of concerns
- Syntax can be confusing
- Doesn't allow state over branching components

#### Recommendation:
This is the industry standard.


## Context API:
#### Pros:
- Simple to setup
- Can connect to any state
- Can connect multiple context to different parts of the app

#### Cons:
- Still new
- Can be messy if not used with restraint

#### Recommendation:
If you're building from scratch/for young startups.

