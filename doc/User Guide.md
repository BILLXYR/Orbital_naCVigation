# Orbital_naCVigation

---
layout: page
title: User Guide
---

UniSave is a **desktop app for managing expenses, optimized for use via a Command Line Interface** (CLI) 
while still having the benefits of a Graphical User Interface (GUI).
If you can type fast, UniSave can get your financial management tasks done faster than traditional GUI apps.
Choose a section from the table of contents below and start using UniSave.

* Table of Contents
    * [1. Overview](#1-overview)
    * [2. Quick start](#2-quick-start)
    * [3. Usage](#3-usage)
    * [4. Command Summary](#4-command-summary)


--------------------------------------------------------------------------------------------------------------------
## 1. Overview
naCVigation is a **web app designed specifically for visually impaired people**

It is an application that helps visually impaired people to manage their daily activities with various functions, such as translating the text and voice out features.


## 2. Quick start

Refer to the guide [_Setting up and getting started_](SettingUp.md).


--------------------------------------------------------------------------------------------------------------------
## 3. Usage

1. In the center, there is a section labelled "voice control". Click/tap the part of this section
that is on the right. Voice control mechanism will start.
Roughly the one circle there, I have made it transparent for better appearance.
Click/tap once will start and click/tap again will stop the voice command.
<br>
2. There is a list of voice control commands below. Refer to the command summary below
<br>
<br>
3. Submit the picture and it will direct to another page where the extracted text is displayed
and an audio of the extracted text will be played.
<br>
<br>
4. There are two functions. Submit the images means the image will be extracted and voice
out while translating the images will extract the text and translate it without voice for
different usage.
<br>
<br>
5. Due to the limited time, we only do the English to Chinese version and other versions are
do-able as well but we do not have time to implement that for now. Moreover, since the
majority group in Singapore are Chinese speakers, we choose Chinese for the majority
user to try and give us some feedback before we embark on multi-language translation.

**Note:**
If after several correct pronunciations, the action does not take place,
please click/tap the box again, anywhere, except for the voice initiation
part. This can be due to the lag in the internet connection.

### 3.1 Reason for the choice of words
It is the easiest to pronounce and use. Due to the difference in accent,
different people may pronounce the same word differently and this will
bring problems for the control. However, the words we choose are the
easiest to pronounce and it is unlikely to pronounce very differently,
we have some sufficient trials on this with different people.
<br>
<br>
Yet, we know that, the word does not provide with any meaning for the
action we want to do, however, we decide to forgo this due to our
limited knowledge on natural language processing and aim for
functionality for now.

--------------------------------------------------------------------------------------------------------------------

## 4. Command Summary

command | action taken by the website
--------|------------------
**stop recordinga**|`stop recording your voice`
**reset input** | `reset the input in the field`
**yes** | `submit the file (need to click/tap the webpage first. Anywhere would be fine)`
**go** | `choose the file` 
**hi** | `capture the image`
**hey** | `choose the translate file`
**no** | `submit the translate file`
**hello** | `go back to the previous page` 
