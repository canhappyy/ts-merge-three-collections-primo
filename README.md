# Step to do this project
## Step 0: Setup typescript project
``` 
mkdir <project-name>
cd <project-name>
npm init -y

npm i -D typescript vitest tsx

npx tsc --init
```
## Step 1: Create src and test folders
``` 
mkdir -p src test
```

## Step 2: Implement merge function in src/merge.ts
* start from the smallest element of each collection
* compare them, put the smallest one to the result collection
* move to the next smallest element in that collection
* and keep repeating the process

## Step 3: Implement a demo in src/index.ts
* provide three pre-sorted collections for demo

## Step 4: Implement unit test with vitest in test/merge.test.ts
* normal test case
* duplicate elements test case
* empty collection test case