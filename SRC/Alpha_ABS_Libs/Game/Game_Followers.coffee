#╒═════════════════════════════════════════════════════════════════════════╛
# ■ Game_Followers.coffee
#╒═════════════════════════════════════════════════════════════════════════╛
#---------------------------------------------------------------------------
do ->
    #?[NEW]
    Game_Followers::initializeABS = ->
        @_data = []
        i = 1
        while i < $gameParty.maxBattleMembers()
            @_data.push new Game_AI2Bot(i)
            i++
    return
# ■ END Game_Followers.coffee
#---------------------------------------------------------------------------