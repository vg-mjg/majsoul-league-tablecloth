Disclaimer: This is a simple mod and it's very easy to use. The following instructions will be on the wall-of-text side, but that's purely to answer as many questions as possible; don't get intimidated by all the text. If you're impatient and can't be bothered to read all of this there will be a short version of what to do to make it work at the end; you can try just using that instead.

---

This is a tablecloth mod for /mjg/ league 2, to use with MJS+. It serves roughly the same purpose as putting team logos on stream through OBS, but since I thought that's messy and looks ugly I devised this method instead. Since you're the streamer the choice which method to use is yours.

0. I assume you already have MJS+ installed. If not, read this:
https://repo.riichi.moe/guides/Majsoul-Plus-Guide.html
Assuming you're on >Windows, dump the LeagueTableclothMod folder in C:\Users\x\AppData\Roaming\Majsoul Plus\extension . If you're a Linux distro the path is still ~/.config/Majsoul Plus/extension .

1. Open league_tablecloth.pdn with a graphic editor of your choice. If you don't have a graphic editor that can handle .pdn files, now's the time to grab one (for example Paint.NET). league_tablecloth.pdn includes 59 layers: the wooden border, which you'll always use; the table background image (green felt by default, to give it a mahjong table look) which you're supposed to use, unless you do actually want to swap it out for something else (feel free to do so, but make your replacement layer centered and 1562px x 1562px); techinical lines, an optional layer which can be used to give the tablecloth a more automatic table feel; and the remaining 56 layers, which are each team's logo in each possible seat, 14 x 4. They are named after team number - for example TEAM 1, TEAM 8 - followed by position from viewer's perspective (BOTTOM, LEFT).
2. To figure out which layers you need to toggle on you have to know the exact seating at the table you'll be streaming. If you already have access to tournament management - great. Otherwise, either ask guano to add you, or find somebody who can access it and feed you the info. The seat order at each table is random, and thus isn't determined until the game actually starts. Remember there's a 300s spectating delay, leaving you quite a bit of time to get stuff done.
3. Once you confirm the seat order for the game you're ready to toggle on the relevant layers. First, decide which player you want to follow for the hanchan - the logo of the team this player is from will be used for BOTTOM part. Then toggle on all other necessary logos, keeping the relative positions in mind. One thing of note is that just as OBS logos won't rotate when you switch perspective in game, neither will the tablecloth. As such changing the perspective is not advised.
If you don't plan to follow a specific player and just intend to spectate from the perspective of whoever sits East in E1 the setup is as follows:
EAST=BOTTOM
SOUTH=RIGHT
WEST=TOP
NORTH=LEFT
4. After you toggle on all relevant layers (4 of them, plus the background) you're ready to export. Your export file should be named Table_Dif.jpg.
5. Dump the Table_Dif.jpg  you just created in C:\Users\x\AppData\Roaming\Majsoul Plus\extension\LeagueTableclothMod\assets (Windows) or ~/.config/Majsoul Plus/extension/LeagueTableclothMod/assets (Linux), overwriting the old file when prompted.
6. Wallah, you're done. Launch MJS+, and remember to toggle on the relevant mod in the Extensions tab. It should work. What could possibly go wrong, right?

7. You'll need to do this again between hanchans, unless you stick to the same teams, in which case you've got 1/24 odds to be able to reuse what you already have. If you're not a luckshitter start over with step 1. You'll need to restart MJS+, too.

---

Short version:
0. Install MJS+, dump LeagueTableclothMod in C:\Users\x\AppData\Roaming\Majsoul Plus\extension (Windows) or ~/.config/Majsoul Plus/extension (Linux).
1. Open league_tablecloth.pdn.
2. Confirm seat order, pick a player to follow.
3. Toggle relevant layers.
4. Export as Table_Dif.jpg.
5. Dump the Table_Dif.jpg in in C:\Users\x\AppData\Roaming\Majsoul Plus\extension\LeagueTableclothMod\assets (Windows) or ~/.config/Majsoul Plus/extension/LeagueTableclothMod/assets (Linux) and overwrite.
6. ???
7. Profit!