# i101 Innovator Website

# Using a Web Browser + GitHub

## Introduction
If you want to learn how to use the `git` command line tool or desktop app, I will eventually include instructions below, although it's much more complicated than the Web Browser method. 

[This](https://www.freecodecamp.org/news/how-to-use-git-and-github-in-a-team-like-a-pro/) site has a great tutorial on using a Web Browser to collaborate on GitHub, and while it isn't as versatile as using `git` via the command line, it will be much easier for our purposes (I sent you all invitations to collaborate on this project already) 

> **NOTE:** You can also just read below for a quick and easy step-by-step guide that I made that explains the whole process of working with GitHub with a Web Browser. 

Oh, I didn't include the process, but obviously go to [GitHub](https://github.com/) and create an account first *(you may be able to do it from the invitation I sent you)*.

## GitHub Workflow
### Create a New Branch
Really, for the purposes of this project we will have a pretty simple workflow. Since we're all basically working on our own files, we shouldn't have to worry too much about anything being overwritten. But to be safe, you always want to develop new code on a new branch to ensure that's the case. Here's how to do that from a Web Browser:

![New Branch](/cheat-sheet/images/new-branch.png)

As you can see, the first step (**Step 1**) is to click the **"main"** button / dropdown menu. From there, the second step (**Step 2**) is to type the name of the branch you'd like to create in (I used *"new-branch"* for the example, but it can be anything. I used *"homepage"* for the actual work that I did on the homepage). Now, click **"Create branch: branch-name** from main" (**Step 3**) to create a new branch.

![Branch Created](/cheat-sheet/images/branch-created.png)

If you did everything correctly you should see the **"New Branch"** banner appear at the top of the screen (**Item A**) and also notice the button / dropdown menu that said **"main"** before say the name of your branch now (***"new-branch"***, in this example) (**Item B**). 

***This step is very important!*** If you're changing files, always make sure you're doing so on the correct branch. As collaborators, you have total control over the repository, and can overwrite or delete files if working on the *"main"* branch (I have a local backup though, it just might not be up-to-date). 

> **NOTE:** also the actual files and their contents may be different than what you see in the screenshots, as I made this *Readme.md* file as I was taking screenshots, so if you notice, none of this text is in the screenshots. 

### Create a New File
Now that you've created a new branch and are working on it, you'll want to create a new file to either write your code in or upload your code into from an existing file that you wrote on your computer. 

> **NOTE:** for our project you'll really only need to create one file and we shouldn't have to worry much about editing other files (unless you need to add CSS or something like that). For now, I'll focus on creating a new file and cover editing an existing one later on.

![Create New File](/cheat-sheet/images/create-new-file.png)

To create a new file simply press the **"Add file"** button / dropdown menu (**Step 1**), and click "Create new file" (**Step 2**). This will bring you to the *GitHub Code Editor* for your new file.

> **NOTE:** I didn't cover the steps to upload a file, but they're pretty similar to these steps (just click the "Upload files" button from this dropdown menu and either drag and drop or select your files from the webpage that appears) and you can also edit a file after you've created or uploaded it. 

**If you do upload existing files, make sure you select "Create a new branch for this commit and start a pull request" from the Upload File page and follow the instructions below for commits and pull requests after uploading *(name the new branch whatever you want)***

### Editing Files
Now that you've either uploaded or created a new file, select it from the files page if you uploaded it, or if you created it you'll be taken to this editor window automatically.

![Edit New File](/cheat-sheet/images/edit-new-file.png)

If you created a new file, you'll need to name the file (**Step 1**); however, if you uploaded a file, you don't need to do this step. **Step 2** is the editor window, where you can write your code, copy/paste existing code from a file on your computer, or edit the code of an existing file. When you're done, click the "Commit changes..." button to create a new "commit" (**Step 3**).

> **NOTE:** If you're editing a file you've already created make sure to select the push to new branch option so that you aren't uploading directly to the "main" branch (unless you really know what you're doing or you're sure you aren't overwriting an existing file).

### Commit Changes
Anytime you edit a file or create a new file you'll create what's called a "commit". This allows you to name your changes and leave a comment indicating what you did in the commit, and these are saved in the repo's history so everyone can see who did what and easily keep track of any updates in case we need to undo something. 

> **NOTE:** This is called **Version Control** and is probably the main draw of GitHub (aside from the great collaborative aspects). This makes it very easy if you're working on new code to develop new features without changing the existing code, or to undo changes if you accidentally break something.

![Commit Changes](/cheat-sheet/images/commit-changes.png)

There are a few parts to a new commit: the "Commit message" which is basically a title for the commit itself (**Step 1**), and the "Commit description" which allows you to briefly explain what you changed (**Step 2**). 

> **NOTE:** If you created a new branch, notice you can commit directly to your new branch or to a new branch (**Step 3**). Always make sure your commits are to new branches (don't commit directly to "main").

When you've chosen which branch to post your new commit to, press the "Commit changes" button to post the commit (**Step 4**) (don't worry, this isn't 100% final, there are still a few more steps...).

### Open a Pull Request
Now that you've edited or uploaded your file, and created your commit, you should see this screen indicating the files in the repo and the changes you've made on your branch. If you're done making changes, to merge your code with the "main" branch you need to open a Pull Request (or to allow someone else to approve it if you're worried about overwriting anything).

> **NOTE:** if someone else had made changes to files you're working on, or if you've made multiple commits before finishing and being ready to merge the files into the "main" branch, you can see how many "Commits" you are ahead of the "main" branch (**Item A**) and you can even view the changes if you click the link. This allows you to work on the code multiple times, and make multiple commits, before confirming that you're ready to merge it with the "main" branch (so if you work on it for a few days or even weeks, it won't be updated on the "main" branch until you're ready).

![Open Pull Request](/cheat-sheet/images/open-pull-request.png)

Again, this is where GitHub really shines. You can easily see the changes that you've made on your branch from here and when you're ready, click the "Contribute" button / dropdown menu (**Step 1**) and click "Open pull request" (**Step 2**). You'll notice a summary of the changes you've made above the "Open pull request" button, and you can click "Compare" to see the changes you'll be pushing to the "main" branch. 

![Create Pull Request](/cheat-sheet/images/create-pull-request.png)

This still isn't final, there will be one more step before anything is made permanent, but you'll see that you're able to edit the Pull Request's title (**Step 1**), and description (**Step 2**), and if there's only one commit it will just use the same title and description from your commit (I think). Finally, when you're done, click "Create pull request" (**Step 3**). Again, this isn't final, so don't sweat it. 

### Comment and Merge a Pull Request
This step isn't necessary, but it's highly recommended. Again, don't commit directly to the "main" branch unless you're sure you're not overwriting something. However, if you are sure, your next step is to merge your Pull Request, but you can stop here if you don't want to do that and shoot a text to the group chat, as anyone of the collaborators can approve and merge a Pull Request to make all of your changes permanent. 

![Comment Pull Request](/cheat-sheet/images/comment-pull-request.png)

Here's an example of how to add an additional comment to a Pull Request, so if someone makes one, but doesn't immediately merge it, you can see the original comment that they made with their Pull Request (**Item A**), type a new comment to communicate (**Item B**) (and post your comment with **Step B1**, see below). When you're ready to commit your changes permanently to the "main" branch though, click the "Merge pull request" button (**Step C**). 

> **NOTE:** Don't worry, if you created a new file, you won't overwrite anything, and feel free to do this as often as you like. If you're updating your own file, and no one else is working on it, you're safe to do this as often as you like as well. But if you notice someone else has changed something or you're editing a shared file, maybe just text the group first to make sure nothing is being overwritten. Again, anyone can approve a Pull Request (I can approve yours, you can approve mine, as collaborators, we all have complete control over the code, that's why I'm stressing that it's possible to delete or overwrite things if they're shared files).

![Commented Pull Request](/cheat-sheet/images/commented.png)

Here's an example of me adding a comment to the Pull Request that I created. It's that easy. (**Step B1** above brought me here). You can see the new comment is **Item A** and we can still press "Merge pull request" at any time to make the changes permanent on the "main" branch. 

> **NOTE:** If you're confused about branches at all, [this](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches) documentation explains how they work, although it's a bit complicated. This really is what makes GitHub and `git` so special though. There really is no pressure though, as just about everything in `git` and GitHub can be undone (any commit, merge, or pull request can be restored to return to previous versions of the code, it just isn't always easy if you have multiple people doing work on the code at the same time).

### Merging Your Branch to "Main"
Like anything else in GitHub, even the merge itself has a comment attached to it and is tracked by the **Version Control System (VCS)**. The first step is to add your comment (**Step 1**) and click "Confirm merge" when you're done (**Step 2**). This will merge your new branch with "main" and commit the changes that you've made to the project *(below)*.

![Merging a Branch](/cheat-sheet/images/merge-branch.png)

When you've finished merging your branch, you should be prompted that it's safe to delete the new branch that you created now (**Item A**) and you can click "Delete Branch" to do so (please don't do this on the main branch!)

![Branch Merged](/cheat-sheet/images/branch-merged.png)

Even after deleting the new branch, you can see that it can easily be restored if you needed to (for whatever reason) (**Item A**). Isn't **Version Control** so great!? This is why GitHub and `git` are standard tools in the software and web development industry. I would highly recommend to get used to using them if you're planning on going any further with either of those fields. 

![Restore Branch](/cheat-sheet/images/restore-branch.png)

### Repository Homepage
Now that we've made our changes, let's go back to the "main" branch and see what's different with the repository. 

![Repo After Merge](/cheat-sheet/images/after-merge.png)

As you can see in the above screenshot, our new file now appears in the file list (**Item A**). We also have quite a bit of information here, at-a-glance we can see which commit added / last changed the file (**Item B**), what the most recent event was on the repository (**Item C**) -- which was us Merging the Pull Request -- and we can even see the total number of commits made (**Item D**). Spend some time clicking around through these menus and you'll be surprised how much information is stored with each update! But what about our new file itself?

![File After Merge](/cheat-sheet/images/file-details.png)

Here's the *GitHub File Editor* again, although this time we can see the last user to change the file (**Item A**), and the File History if we want to click the link at **Item B**! Again, GitHub really is a powerful tool (we'll look at some of this later).

### Delete a File
Well, since we're done with the tutorial, let's delete the file (and do something that I said never to do -- commit directly to the "main" branch).

![Delete File](/cheat-sheet/images/delete-file.png)

From the *GitHub File Editor* (but also the homepage of the repository) we can click the "..." button / dropdown menu (**Step 1**) to open the "File Options" menu, and from there we can select "Delete file" (**Step 2**)

> **NOTE:** notice how this option is in all red text? Pay attention any time that you see that, and be very sure you know what you're doing if you're clicking an option that's in all red. It's usually a warning that you're doing something that potentially can't be undone. ALWAYS exercise caution if you see this red text.

![Deleted File](/cheat-sheet/images/deleted-file.png)

Like anything else in GitHub / `git` even deleting a file is a Commit, so after we've "deleted" the filel we can either press "Cancel changes" (**Option A**) or "Commit changes..." (**Step 1**). But remember what I said earlier about doing something I said never to do?

![Commit to Main](/cheat-sheet/images/commit-to-main.png)

We're going to make this Commit directly to the "main" branch (**Option A**); however, we don't have to. As you can see, below that is an option to create a new branch for this commit, and if you're ever worried about something, this is your safest bet (create a new branch, make your commit, and open a pull request for approval). It really isn't that big of a deal, but it's best to learn these practices from the start to avoid bad habits.

![File Gone](/cheat-sheet/images/file-gone.png)

Aaaaaaaannnd it's gone! No more new file! Not only did the "File deleted" banner appear (**Item A**) but we can see that it no longer appears in the repository's file list (**Item B**).

### GitHub Merge/Pull/Commit/File History
Okay, before I call it quits for this tutorial, let's look at just a few more things. I honestly feel like at this point you should understand how to use GitHub, how `git` works for the most part (at least the concept of files, commits, pull requests, and merges) and why it's an important skill to have in the modern software / web development industry. Let's check a few of the history features really quickly.

![Check Pull Requests](/cheat-sheet/images/check-pull-requests.png)

By clicking the "Pull requests" tab at the top of the page (**Step 1**) we can see the Open Pull Requests for the repository. This is where you'd go to merge pull requests, add or read comments, and many other things. One of those things is checking the history of pull requests (**Item A**).

![Pull Request History](/cheat-sheet/images/pull-request-history.png)

Here we can see the Pull request from this tutorial. You can see the commit that I made (**Item A**) and if I scroll over it we can see a bit more information about it (**Item B**). 

![Commit History](/cheat-sheet/images/commit-history.png)

We can also see the commit history of this pull request - as you can make multiple commits to a branch before you merge it into the "main" or another branch. Clicking "Commits" (**Step 1**) will show us our commit from this tutorial. Where we can see the changes we made (**Item A**) and even tip the person who makes the commit! 

> **NOTE:** This is a fun GitHub feature that I brought up to highlight the nature of the GitHub community. Honestly, the nature of software development in general. If you've ever been to StackOverflow you know how willing people are to help one another in this community. It's how I learned so many programming languages, and these badges are a great example of that open-source, community-oriented mentality (honestly, so is this tutorial!). Because I was taught with this mentality, I'll always help others learn, and hopefully that cycle continues. Software development is a skill that you can learn with only some free time, a computer, and internet access, and that's all it takes (maybe a little dedication).

![File Changes](/cheat-sheet/images/file-changes.png)

Anyway, We can see here, on the last page (it's like 3AM, I need some sleep -- oh yeah, coffee is pretty important for software development too, haha jk) that we can click the "Files changed" (**Step 1**) tab to see the individual, line-by-line "diff" / file changes of the commit. **Item A** shows the body of the file that we created (and deleted) in this tutorial, and which lines were added by this specific commit. It will also show you lines that were removed if you change things, and you'll be surprised to see what all `git` and GitHub keeps track of! Alright, I hope this wasn't too much to read. I hope you all find this tool as useful as I do, and if you're confused about anything, don't hesitate to reach out!





## GitHub Workflow Summary

1. Create a New Branch
2. Create / Upload New Files
3. Edit Files
4. Commit Changes
5. Open a Pull Request
6. **[OPTIONAL]** Comment Your Pull Request
7. **[OPTIONAL]** Merge Your Pull Request
8. **[OPTIONAL]** Delete Your New Branch
9. ***Repeat as Necessary***

> **FINAL NOTE:** See, even this readme file is a work-in-progress! I wanted to get a complete version of these instructions uploaded as soon as possible so that we could all start working on the website, so I only covered the Web Browser / GitHub Method, but honestly, I think that's all we really need for now anyway. I use the command line, but it's a lot more complicated, and using the Web Browser first will make it a lot easier to understand the `git` commands later if you want to learn. The Desktop App isn't hard to use either, although I haven't used it for a long time, and there are also VSCode plugins that make using GitHub easy too. I would recommend using the Web Browser until you get used to it though, as it's a great place to start.





## Git Cheat Sheet

> `WORK-IN-PROGRESS! COMING SOON!`
-----

### Introduction
First and foremost, [here's](https://medium.com/@androidmatheny/using-git-and-github-on-group-projects-d636be2cdd4d) a great article for those who have never worked with `git` or GitHub before. I'll detail common `git` commands and Installation of the `git` command line tool for MacOS (although I linked resources for Windows Installation too). If you're not into using the command line / terminal, I also briefly detailed steps on using GitHub in your Web Browser and the GitHub Desktop app, but I'd highly recommend getting familiar with `git` as it's a very common tool in the industry. 

However, the article linked above does a much better job explaining the process than I did here, so check that out if you're unclear (I already created the repository and did all the initial steps -- obviously, you're reading this on the repo).

### Git Commands

> `WORK-IN-PROGRESS!`

### Installing Git

#### MacOS Installation

On MacOS, there is a binary for `git` at **/usr/bin/git** however, by default it's a wrapper around the command line tools installer. Running the `git` command from the MacOS **Terminal** will print the following and return immediately: 

>`note: install requested for command line developer tools`

*(Press **Command(⌘) + Space** to open the **Spotlight Search** and type **'terminal'** to run the MacOS **Terminal**)*.

A prompt will ask the user to install the command line tools, with a button that downloads and installs the toolset.

![Install Image](/cheat-sheet/images/install-prompt.png)

Once installed, **/usr/bin/git** will be a proper version of Git compiled by Apple (noted by the ‘Apple Git’).

>`$ git --version`   
>`git version 2.39.3 (Apple Git-145)`

From here, follow the instructions in the cheatsheet below to begin using Git and GitHub to push and pull code to / from the *i101-innovator-website* repository.

#### Windows Installation

I didn't actually do this process myself, but the official documentation found  [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) describes the process. Either way, once you have `git` installed the commands are the same and are ran from either the MacOS **Terminal** or the Windows **Command Line** / **PowerShell Prompt**.  

If you aren't super clear on how to do this, just try using the *Web Browser method* instead, or even the *Desktop App*, although I didn't cover the Desktop App's steps in detail either (the documentation is pretty self-explanatory). 

## GitHub Desktop App

> `WORK-IN-PROGRESS!`

> **NOTE:** The app is really easy to use too, if you feel like trying it out, or any of the VSCode plugins, go for it! As you can tell from the documentation, it's hard to do anything permanent unless you're deleting something from the history (which I take local backups once a day just in case, accidents happen, haha, I've done it before).

<!-- here's a secret comment for anyone reading the Markdown file as code, congrats! You found my easter egg! +50 points for you! Markdown, or MD, is a major pain to look at, but it isn't too hard to learn, and it's pretty powerful (and it's the language of GitHub readme files). Here's a useful resource, and as you can see from this comment, HTML and CSS works in .md files as well (https://www.markdownguide.org/cheat-sheet/). Happy coding! As always, feel free to message me if you have any questions! -->