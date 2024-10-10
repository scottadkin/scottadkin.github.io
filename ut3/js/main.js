
const announcerFiles = [{file: "A_RewardAnnouncer_DoubleKill.ogg",duration: "1.93"},{file: "A_RewardAnnouncer_MultiKill.ogg",duration: "1.97"},{file: "A_RewardAnnouncer_MegaKill.ogg",duration: "2.66"},{file: "A_RewardAnnouncer_UltraKill.ogg",duration: "1.57"},{file: "A_RewardAnnouncer_MonsterKill.ogg",duration: "2.84"},{file: "A_RewardAnnouncer_KillingSpree.ogg",duration: "2.45"},{file: "A_RewardAnnouncer_Rampage.ogg",duration: "2.45"},{file: "A_RewardAnnouncer_Dominating.ogg",duration: "1.63"},{file: "A_RewardAnnouncer_Unstoppable.ogg",duration: "2.57"},{file: "A_RewardAnnouncer_Godlike.ogg",duration: "1.88"},{file: "A_RewardAnnouncer_Massacre.ogg",duration: "2.44"},{file: "A_RewardAnnouncer_HeadShot.ogg",duration: "1.88"},{file: "A_RewardAnnouncer_BigGameHunter.ogg",duration: "2.58"},{file: "A_RewardAnnouncer_Biohazard.ogg",duration: "2.61"},{file: "A_RewardAnnouncer_BlueStreak.ogg",duration: "2.11"},{file: "A_RewardAnnouncer_BullsEye.ogg",duration: "2.49"},{file: "A_RewardAnnouncer_CarJacked.ogg",duration: "1.33"},{file: "A_RewardAnnouncer_ComboKing.ogg",duration: "3.08"},{file: "A_RewardAnnouncer_Denied.ogg",duration: "2.00"},{file: "A_RewardAnnouncer_EagleEye.ogg",duration: "2.21"},{file: "A_RewardAnnouncer_FirstBlood.ogg",duration: "2.45"},{file: "A_RewardAnnouncer_Gunslinger.ogg",duration: "3.05"},{file: "A_RewardAnnouncer_Hattrick.ogg",duration: "2.55"},{file: "A_RewardAnnouncer_FlakMaster.ogg",duration: "2.77"},{file: "A_RewardAnnouncer_HeadHunter.ogg",duration: "2.52"},{file: "A_RewardAnnouncer_Hijacked.ogg",duration: "1.39"},{file: "A_RewardAnnouncer_JackHammer.ogg",duration: "2.19"},{file: "A_RewardAnnouncer_HitAndRun.ogg",duration: "1.70"},{file: "A_RewardAnnouncer_Juggernaut.ogg",duration: "1.91"},{file: "A_RewardAnnouncer_Pancake.ogg",duration: "2.10"},{file: "A_RewardAnnouncer_NodeBuster.ogg",duration: "3.01"},{file: "A_RewardAnnouncer_Roadkill.ogg",duration: "1.81"},{file: "A_RewardAnnouncer_RoadRage.ogg",duration: "2.94"},{file: "A_RewardAnnouncer_Unreal.ogg",duration: "2.17"},{file: "A_RewardAnnouncer_RoadRampage.ogg",duration: "3.37"},{file: "A_RewardAnnouncer_TopGun.ogg",duration: "1.99"},{file: "A_RewardAnnouncer_RocketScientist.ogg",duration: "2.35"},{file: "A_RewardAnnouncer_ShaftMaster.ogg",duration: "2.91"},{file: "A_RewardAnnouncer_VehicularManslaughter.ogg",duration: "3.21"},{file: "A_RewardAnnouncer_LastSecondSave.ogg",duration: "2.37"}];

const reaperFiles = [{file: "A_Banter_Reaper_AkashaShesHere.ogg",duration: "1.59"},{file: "A_Banter_Reaper_WatchYourStep.ogg",duration: "2.64"},{file: "A_Banter_Reaper_WeCanHaveAPartyInThere.ogg",duration: "3.96"},{file: "A_Banter_Reaper_WeMayBetheFirstHumans.ogg",duration: "3.23"},{file: "A_Banter_Reaper_WeNeedAccessToTheMine.ogg",duration: "1.72"},{file: "A_Banter_Reaper_WeNeedToFindThisInformant.ogg",duration: "3.36"},{file: "A_Banter_Reaper_WereVulnerable.ogg",duration: "2.32"},{file: "A_Banter_Reaper_WeNeedToHoldOurGround.ogg",duration: "2.83"},{file: "A_Banter_Reaper_WhoSaidLifeWasFair.ogg",duration: "2.33"},{file: "A_Banter_Reaper_YeahTheBigBlueLodge.ogg",duration: "3.57"},{file: "A_Banter_Reaper_YouLookLonely.ogg",duration: "4.45"},{file: "A_Banter_Reaper_YouPickedTheWrongTeam.ogg",duration: "1.79"},{file: "A_Banter_Reaper_AtLeastNobodyThatLived.ogg",duration: "2.30"},{file: "A_Banter_Reaper_BeGladItsContained.ogg",duration: "3.33"},{file: "A_Banter_Reaper_BishopGetToHighGround.ogg",duration: "2.02"},{file: "A_Banter_Reaper_CarefulTheKrallHaveNightshades.ogg",duration: "2.24"},{file: "A_Banter_Reaper_ComeOnThisIsHerLastRespawner.ogg",duration: "2.45"},{file: "A_Banter_Reaper_Focus.ogg",duration: "0.86"},{file: "A_Banter_Reaper_FocusOnThatMineToTheEast.ogg",duration: "3.33"},{file: "A_Banter_Reaper_YoureInMyWay.ogg",duration: "1.17"},{file: "A_Banter_Reaper_HowMuchAreTheyPayingYou.ogg",duration: "1.68"},{file: "A_Banter_Reaper_YouSaidYouWantedAChallenge.ogg",duration: "3.21"},{file: "A_Banter_Reaper_ICouldUseALittleHelpHere.ogg",duration: "2.01"},{file: "A_Banter_Reaper_YouWillPayForYours.ogg",duration: "2.19"},{file: "A_BotStatus_Reaper_Alpha.ogg",duration: "0.67"},{file: "A_Banter_Reaper_ILikedItBetterWithoutTheKrall.ogg",duration: "1.95"},{file: "A_BotStatus_Reaper_Bravo.ogg",duration: "0.71"},{file: "A_Banter_Reaper_ImGonnaEnjoyThis.ogg",duration: "2.70"},{file: "A_BotStatus_Reaper_ByTheNumbersPeopleLetsMove.ogg",duration: "2.24"},{file: "A_Banter_Reaper_IntelSaysKeepAnEyeOnTheSky.ogg",duration: "2.21"},{file: "A_Banter_Reaper_ItLooksLikeAFlag.ogg",duration: "4.01"},{file: "A_Banter_Reaper_IveGotEyesOnAWalker.ogg",duration: "1.37"},{file: "A_Banter_Reaper_ItsBeautifulAndHorrible.ogg",duration: "3.39"},{file: "A_Banter_Reaper_ItsNotJustYou.ogg",duration: "1.45"},{file: "A_BotStatus_Reaper_Delta.ogg",duration: "0.71"},{file: "A_BotStatus_Reaper_Echo.ogg",duration: "0.70"},{file: "A_BotStatus_Reaper_EnemyLeviathan.ogg",duration: "1.29"},{file: "A_BotStatus_Reaper_Charlie.ogg",duration: "0.73"},{file: "A_Banter_Reaper_IWantYourBestTodayRonin.ogg",duration: "1.83"},{file: "A_Banter_Reaper_JustKeepItAwayFromAkasha.ogg",duration: "1.88"},{file: "A_Banter_Reaper_JustBeGladWereNotFightRobots.ogg",duration: "2.54"},{file: "A_Banter_Reaper_JustTwoMore.ogg",duration: "1.13"},{file: "A_Banter_Reaper_KeepAnEyeOnThoseTrainStations.ogg",duration: "2.06"},{file: "A_Banter_Reaper_KeepAnEyeOutForTheBerserk.ogg",duration: "2.06"},{file: "A_Banter_Reaper_KeepYourEyesPeeled.ogg",duration: "2.20"},{file: "A_BotStatus_Reaper_EnemyManta.ogg",duration: "1.04"},{file: "A_Banter_Reaper_LearnTheLayoutQuickly.ogg",duration: "3.84"},{file: "A_Banter_Reaper_LooksLikeAxonDeclaredMartialLaw.ogg",duration: "2.44"},{file: "A_BotStatus_Reaper_EnemyScorpion.ogg",duration: "1.24"},{file: "A_Banter_Reaper_LookWhatTheyveDoneDisgusting.ogg",duration: "3.30"},{file: "A_Banter_Reaper_NiceJobRonin.ogg",duration: "1.31"},{file: "A_Banter_Reaper_NicelyDoneRonin.ogg",duration: "1.28"},{file: "A_Banter_Reaper_NiceJobRoninThatMineIsOurTicket.ogg",duration: "3.36"},{file: "A_Banter_Reaper_NoEscapeThisTime.ogg",duration: "3.65"},{file: "A_Banter_Reaper_nomoreRunningAkasha.ogg",duration: "1.86"},{file: "A_Banter_Reaper_NotLongNow.ogg",duration: "1.38"},{file: "A_Banter_Reaper_OhYeah.ogg",duration: "1.46"},{file: "A_Banter_Reaper_RightYouDoThat.ogg",duration: "3.10"},{file: "A_Banter_Reaper_RoninFocusOnThatMiningNode.ogg",duration: "2.18"},{file: "A_Banter_Reaper_SeemsALittleTooEasy.ogg",duration: "1.76"},{file: "A_Banter_Reaper_StayFocusedJester.ogg",duration: "2.86"},{file: "A_Banter_Reaper_StillThinkShesHot.ogg",duration: "1.27"},{file: "A_BotStatus_Reaper_EnemyViper.ogg",duration: "1.06"},{file: "A_Banter_Reaper_TakeTheHilltopNode.ogg",duration: "2.83"},{file: "A_BotStatus_Reaper_Incoming.ogg",duration: "1.30"},{file: "A_BotStatus_Reaper_JesterStatus.ogg",duration: "1.28"},{file: "A_Banter_Reaper_TheresLoque.ogg",duration: "4.54"},{file: "A_Taunt_Reaper_AndStayDown.ogg",duration: "1.24"},{file: "A_Taunt_Reaper_AnyoneOutThere.ogg",duration: "1.33"},{file: "A_Banter_Reaper_TooBadForHim.ogg",duration: "1.69"},{file: "A_Taunt_Reaper_APastWrongRighted.ogg",duration: "2.02"},{file: "A_Taunt_Reaper_BioHazard.ogg",duration: "1.34"},{file: "A_Taunt_Reaper_BooYa.ogg",duration: "1.07"},{file: "A_Taunt_Reaper_BringingItHome.ogg",duration: "1.23"},{file: "A_Taunt_Reaper_Damn.ogg",duration: "0.95"},{file: "A_Taunt_Reaper_DeathWarrant.ogg",duration: "1.87"},{file: "A_Taunt_Reaper_DoNotPushMe.ogg",duration: "1.90"},{file: "A_Taunt_Reaper_FeelImpact.ogg",duration: "3.19"},{file: "A_Taunt_Reaper_FlakAttack.ogg",duration: "1.30"},{file: "A_Taunt_Reaper_ForTheFallen.ogg",duration: "1.37"},{file: "A_Taunt_Reaper_GetOffMe.ogg",duration: "1.09"},{file: "A_Taunt_Reaper_GotEm.ogg",duration: "0.71"},{file: "A_Taunt_Reaper_GreenIsYourColor.ogg",duration: "1.80"},{file: "A_Taunt_Reaper_IWillHaveMyRevenge.ogg",duration: "2.18"},{file: "A_Taunt_Reaper_KeepItUp.ogg",duration: "1.00"},{file: "A_Taunt_Reaper_KilledIt.ogg",duration: "1.52"},{file: "A_Taunt_Reaper_KnowThatYouHaveForcedMyHandInThis.ogg",duration: "2.71"},{file: "A_Taunt_Reaper_LineEmUpAndKnockThemDown.ogg",duration: "2.10"},{file: "A_Taunt_Reaper_LosingBlood.ogg",duration: "2.07"},{file: "A_Taunt_Reaper_MadeMyPoint.ogg",duration: "1.74"},{file: "A_Taunt_Reaper_NailedTheFlagCarrier.ogg",duration: "1.69"},{file: "A_Taunt_Reaper_NeverSawItComing.ogg",duration: "1.39"},{file: "A_Taunt_Reaper_NowImPissed.ogg",duration: "1.74"},{file: "A_Taunt_Reaper_OhSmack.ogg",duration: "1.78"},{file: "A_Taunt_Reaper_OhThisSucks.ogg",duration: "1.73"},{file: "A_Taunt_Reaper_OneShotOneKill.ogg",duration: "1.96"},{file: "A_Taunt_Reaper_OutOfMyWay.ogg",duration: "1.22"},{file: "A_Taunt_Reaper_PackageDelivered.ogg",duration: "1.56"},{file: "A_Taunt_Reaper_RookieMistake.ogg",duration: "1.41"},{file: "A_Taunt_Reaper_Shocking.ogg",duration: "0.99"},{file: "A_Taunt_Reaper_ThatsGottaHurt.ogg",duration: "2.11"},{file: "A_Taunt_Reaper_ThatWasMessy.ogg",duration: "2.14"},{file: "A_Taunt_Reaper_TheresMoreWhereThatCameFrom.ogg",duration: "1.94"},{file: "A_Taunt_Reaper_TwinSoulsStrengthOfTheFist.ogg",duration: "2.43"},{file: "A_Taunt_Reaper_WhatTheHell.ogg",duration: "1.02"},{file: "A_Taunt_Reaper_YouveGotToBeKiddingMe.ogg",duration: "1.97"},{file: "A_Banter_Reaper_WeNeedSomeoneOnthatTurret.ogg",duration: "3.71"},];


const othelloFiles = [{file: "A_Banter_Othello_AHotChickThatCanKickOurAsses.ogg",duration: "4.47"},{file: "A_BotStatus_Othello_EnemyGoliathDestroyed.ogg",duration: "1.99"},{file: "A_BotStatus_Othello_EnemyHellbender.ogg",duration: "1.14"},{file: "A_BotStatus_Othello_EnemyHellFire.ogg",duration: "1.31"},{file: "A_BotStatus_Othello_EnemyLeviathanDestroyed.ogg",duration: "1.84"},{file: "A_BotStatus_Othello_EnemyLeviathan.ogg",duration: "1.10"},{file: "A_BotStatus_Othello_EnemyNemesis.ogg",duration: "1.27"},{file: "A_BotStatus_Othello_EnemyPrimeNodeCaptured.ogg",duration: "1.79"},{file: "A_BotStatus_Othello_EnemyRaptor.ogg",duration: "1.03"},{file: "A_BotStatus_Othello_EnemyOrbCarrierDown.ogg",duration: "2.15"},{file: "A_BotStatus_Othello_EnemyPaladin.ogg",duration: "1.07"},{file: "A_BotStatus_Othello_EnemyNightshade.ogg",duration: "1.24"},{file: "A_BotStatus_Othello_EnemyOrbCarrier.ogg",duration: "1.61"},{file: "A_BotStatus_Othello_EnemyStealthbender.ogg",duration: "1.50"},{file: "A_BotStatus_Othello_EnemyScavenger.ogg",duration: "1.36"},{file: "A_BotStatus_Othello_FloodgateNodeCaptured.ogg",duration: "2.04"},{file: "A_BotStatus_Othello_FriendlyFire.ogg",duration: "1.25"},{file: "A_BotStatus_Othello_GotIt.ogg",duration: "0.66"},{file: "A_BotStatus_Othello_GotYourBack.ogg",duration: "0.85"},{file: "A_BotStatus_Othello_HeadingForTheBerserk.ogg",duration: "1.39"},{file: "A_BotStatus_Othello_HeadingForTheInvisibility.ogg",duration: "1.76"},{file: "A_BotStatus_Othello_HeadingForTheJumpBoots.ogg",duration: "1.55"},{file: "A_BotStatus_Othello_HeadingForTheRedeemer.ogg",duration: "1.33"},{file: "A_BotStatus_Othello_HeadingForTheShapedCharge.ogg",duration: "1.76"},{file: "A_BotStatus_Othello_HeadingForTheShieldBelt.ogg",duration: "1.42"},{file: "A_BotStatus_Othello_HeadingForTheSuperHealth.ogg",duration: "1.57"},{file: "A_BotStatus_Othello_HeadingForTheUDamage.ogg",duration: "1.66"},{file: "A_BotStatus_Othello_HeadingTowardAirNode.ogg",duration: "1.61"},{file: "A_BotStatus_Othello_HeadingTowardBridgeNode.ogg",duration: "1.79"},{file: "A_BotStatus_Othello_HeadingTowardCenterNode.ogg",duration: "1.94"},{file: "A_Banter_Othello_CanYouImagineTheDevestation.ogg",duration: "3.76"},{file: "A_BotStatus_Othello_HeadingTowardEastNode.ogg",duration: "1.79"},{file: "A_BotStatus_Othello_HeadingTowardEastRoadNode.ogg",duration: "2.20"},{file: "A_Banter_Othello_DidYouSeeThatRobotChickDance.ogg",duration: "5.14"},{file: "A_BotStatus_Othello_HeadingTowardEastTankNode.ogg",duration: "2.16"},{file: "A_Banter_Othello_CantThoseIdiotsHitAnything.ogg",duration: "2.01"},{file: "A_BotStatus_Othello_HeadingTowardEastAirNode.ogg",duration: "2.13"},{file: "A_Banter_Othello_ComeOnBishop.ogg",duration: "3.70"},{file: "A_Banter_Othello_DidntWeAlreadyDoThis.ogg",duration: "2.03"},{file: "A_Banter_Othello_BuckLove.ogg",duration: "3.71"},{file: "A_Banter_Othello_CantWeJustBlowItUp.ogg",duration: "1.53"},{file: "A_BotStatus_Othello_HeadingTowardEnemyCore.ogg",duration: "1.89"},{file: "A_Banter_Othello_Groans.ogg",duration: "3.50"},{file: "A_Banter_Othello_GreatNowTheyCanFly.ogg",duration: "3.05"},{file: "A_BotStatus_Othello_HeadingTowardEnemyPrimeNode.ogg",duration: "2.19"},{file: "A_Banter_Othello_HopeHerContractCoversPlasticSurgery.ogg",duration: "3.22"},{file: "A_Banter_Othello_FightingSwampThingsSucks.ogg",duration: "2.49"},{file: "A_Banter_Othello_ICanShootThroughIt.ogg",duration: "3.05"},{file: "A_Banter_Othello_GuessYoureOnDefenseSlowPoke.ogg",duration: "2.20"},{file: "A_Banter_Othello_ICantBeMadAtHer.ogg",duration: "1.56"},{file: "A_Banter_Othello_IfWeCaptureThisThing.ogg",duration: "3.73"},{file: "A_BotStatus_Othello_HeadingTowardFloodgateNode.ogg",duration: "2.19"},{file: "A_Banter_Othello_IDoNotWantToDieHere.ogg",duration: "2.57"},{file: "A_Banter_Othello_IDontCareImKillingEmAnyway.ogg",duration: "1.74"},{file: "A_BotStatus_Othello_HeadingTowardHilltopNode.ogg",duration: "2.04"},{file: "A_Banter_Othello_ILoveMyJob.ogg",duration: "2.03"},{file: "A_Banter_Othello_ILikedThisDarkwalkerALotBetter.ogg",duration: "3.35"},{file: "A_BotStatus_Othello_HeadingTowardHillsideNode.ogg",duration: "2.08"},{file: "A_Banter_Othello_ILIkeAGoodShortcut.ogg",duration: "3.31"},{file: "A_Banter_Othello_LookAtThatTankItsHuge.ogg",duration: "2.97"},{file: "A_Banter_Othello_IsItJustMeOrIsLaurenSmokinHot.ogg",duration: "3.93"},{file: "A_Banter_Othello_IfItsSoEasy.ogg",duration: "3.82"},{file: "A_Banter_Othello_MmmSpaghetti.ogg",duration: "5.31"},{file: "A_Banter_Othello_ItsASewagePlant.ogg",duration: "4.78"},{file: "A_Banter_Othello_ItsCaptureTheFlagWithVehicles.ogg",duration: "3.26"},{file: "A_Banter_Othello_MaybeTheyHaventNoticedUs.ogg",duration: "1.95"},{file: "A_Banter_Othello_IsHeSeriousTheresALeviathan.ogg",duration: "2.78"},{file: "A_Banter_Othello_RogerIllKeepAnEyeOut.ogg",duration: "1.65"},{file: "A_Banter_Othello_MoreLikeCoolestEver.ogg",duration: "2.53"},{file: "A_Banter_Othello_Ole.ogg",duration: "1.34"},{file: "A_Banter_Othello_OhIDontKnowSwim.ogg",duration: "3.28"},{file: "A_Banter_Othello_OurSpawnerIsRunningLow.ogg",duration: "2.53"},{file: "A_Banter_Othello_RightYeahIKnewThat.ogg",duration: "3.53"},{file: "A_Banter_Othello_ThatDoesSoundDangerous.ogg",duration: "1.90"},{file: "A_Banter_Othello_SoTheyGetVehiclesAndWeDont.ogg",duration: "3.94"},{file: "A_Banter_Othello_TheirSpawnerBetterBeRunningLow.ogg",duration: "2.94"},{file: "A_Banter_Othello_SweetHoverboards.ogg",duration: "3.61"},{file: "A_Banter_Othello_TheresNecrisTubesEverywhere.ogg",duration: "2.25"},{file: "A_Banter_Othello_SoUhWereOnASpacestation.ogg",duration: "6.18"},{file: "A_Banter_Othello_ItsANanoblackThing.ogg",duration: "3.06"},{file: "A_Banter_Othello_ThatInvulnerabilityPowerupIsMine.ogg",duration: "2.93"},{file: "A_BotStatus_Othello_HeadingTowardMineNode.ogg",duration: "1.87"},{file: "A_Banter_Othello_TheDarkwalkerBlew.ogg",duration: "3.54"},{file: "A_Banter_Othello_ThisIsGettingReallyTight.ogg",duration: "2.44"},{file: "A_Banter_Othello_WestOfTheGoliathTank.ogg",duration: "1.72"},{file: "A_Banter_Othello_SweetWereGoingSnowboarding.ogg",duration: "2.72"},{file: "A_Banter_Othello_ThisSandstormIsPlayingHell.ogg",duration: "3.28"},{file: "A_Banter_Othello_UhBishopDoesThatMean.ogg",duration: "3.35"},{file: "A_Banter_Othello_WeHaveTheFlagLetsBringItHome.ogg",duration: "2.65"},{file: "A_Banter_Othello_WereAlreadyLosing.ogg",duration: "1.67"},{file: "A_Banter_Othello_ThisPlaceIsCrazy.ogg",duration: "5.61"},{file: "A_Banter_Othello_WhoPutPowerupsInAPoopChute.ogg",duration: "2.58"},{file: "A_Banter_Othello_WhatItIThoughtThisWasAnInfantryFight.ogg",duration: "3.26"},{file: "A_Banter_Othello_WhereIsEverybody.ogg",duration: "1.41"},{file: "A_Banter_Othello_YouMeanLikeUs.ogg",duration: "1.26"},{file: "A_Banter_Othello_WhtIsForDinnerAnyway.ogg",duration: "1.79"},{file: "A_BotStatus_Othello_Affirmative.ogg",duration: "0.97"},{file: "A_Banter_Othello_WhatIsThatThing.ogg",duration: "2.07"},{file: "A_BotStatus_Othello_AttackingAirNode.ogg",duration: "1.49"},{file: "A_Banter_Othello_YeahItsUselessOnInfantry.ogg",duration: "2.41"},{file: "A_BotStatus_Othello_AreaSecure.ogg",duration: "1.18"},{file: "A_BotStatus_Othello_AirNodeCaptured.ogg",duration: "1.23"},{file: "A_Banter_Othello_WhyIsMatrixRunningLikeThis.ogg",duration: "2.07"},{file: "A_BotStatus_Othello_AllClear.ogg",duration: "0.96"},{file: "A_BotStatus_Othello_AttackingBridgeNode.ogg",duration: "1.59"},{file: "A_BotStatus_Othello_AttackingEastNode.ogg",duration: "1.62"},{file: "A_BotStatus_Othello_Acknowledged.ogg",duration: "1.01"},{file: "A_BotStatus_Othello_AttackingEnemyCore.ogg",duration: "1.81"},{file: "A_BotStatus_Othello_AttackingCenterNode.ogg",duration: "1.71"},{file: "A_BotStatus_Othello_AttackingEastRoadNode.ogg",duration: "1.80"},{file: "A_BotStatus_Othello_AttackingEastAirNode.ogg",duration: "1.79"},{file: "A_BotStatus_Othello_AttackingHillsideNode.ogg",duration: "1.98"},{file: "A_BotStatus_Othello_AttackingNorthTankNode.ogg",duration: "1.81"},{file: "A_BotStatus_Othello_AttackingOurCore.ogg",duration: "1.59"},{file: "A_BotStatus_Othello_AttackingPrimeNode.ogg",duration: "1.99"},{file: "A_BotStatus_Othello_HeadingTowardNorthMineNode.ogg",duration: "2.12"},{file: "A_BotStatus_Othello_AttackingSouthMineNode.ogg",duration: "1.98"},{file: "A_BotStatus_Othello_AttackingHilltopNode.ogg",duration: "2.02"},{file: "A_Banter_Othello_WouldntItBeEasierToDefend.ogg",duration: "3.80"},{file: "A_BotStatus_Othello_AttackingEastTankNode.ogg",duration: "1.99"},{file: "A_Banter_Othello_WhoaIsThatARedeemer.ogg",duration: "3.10"},{file: "A_BotStatus_Othello_AttackingEnemyPrimeNode.ogg",duration: "2.08"},{file: "A_BotStatus_Othello_AttackingFloodgateNode.ogg",duration: "1.87"},{file: "A_BotStatus_Othello_AttackingSouthTankNode.ogg",duration: "2.02"},{file: "A_BotStatus_Othello_AttackingTankNode.ogg",duration: "1.63"},{file: "A_BotStatus_Othello_HeadingTowardOurCore.ogg",duration: "1.89"},{file: "A_BotStatus_Othello_AttackingWestAirNode.ogg",duration: "1.90"},{file: "A_BotStatus_Othello_AttackingWestMineNode.ogg",duration: "1.81"},{file: "A_BotStatus_Othello_HeadingTowardNorthTankNode.ogg",duration: "2.02"},{file: "A_BotStatus_Othello_HeadingTowardSouthMineNode.ogg",duration: "2.29"},{file: "A_BotStatus_Othello_AttackingWestNode.ogg",duration: "1.72"},{file: "A_BotStatus_Othello_CoveringYou.ogg",duration: "1.07"},{file: "A_BotStatus_Othello_AttackingWestRoadNode.ogg",duration: "1.91"},{file: "A_BotStatus_Othello_DefendingOurCore.ogg",duration: "1.78"},{file: "A_BotStatus_Othello_BridgeNodeCaptured.ogg",duration: "1.80"},{file: "A_BotStatus_Othello_HeadingTowardPrimeNode.ogg",duration: "2.14"},{file: "A_BotStatus_Othello_EastRoadNodeCaptured.ogg",duration: "1.91"},{file: "A_BotStatus_Othello_AttackingWestNorthMineNode.ogg",duration: "2.05"},{file: "A_BotStatus_Othello_DefendingEnemyCore.ogg",duration: "1.67"},{file: "A_BotStatus_Othello_EnemyDarkwalker.ogg",duration: "1.20"},{file: "A_BotStatus_Othello_EnemyDarkwalkerDestroyed.ogg",duration: "2.32"},{file: "A_BotStatus_Othello_EastAirNodeCaptured.ogg",duration: "1.73"},{file: "A_BotStatus_Othello_EnemyFlagCarrier.ogg",duration: "1.62"},{file: "A_BotStatus_Othello_EnemyFlagCarrierDown.ogg",duration: "1.96"},{file: "A_BotStatus_Othello_EnemyCicada.ogg",duration: "1.08"},{file: "A_BotStatus_Othello_EnemyFlagCarrierGoingLow.ogg",duration: "1.96"},{file: "A_BotStatus_Othello_EnemyFlagCarrierHere.ogg",duration: "1.84"},{file: "A_BotStatus_Othello_EnemyFury.ogg",duration: "1.08"},{file: "A_BotStatus_Othello_EnemyGoliath.ogg",duration: "1.10"},{file: "A_BotStatus_Othello_EastNodeCaptured.ogg",duration: "1.39"},{file: "A_BotStatus_Othello_EastTankNodeCaptured.ogg",duration: "1.62"},{file: "A_BotStatus_Othello_EnemyFlagCarrierGoingHigh.ogg",duration: "2.01"},{file: "A_BotStatus_Othello_AttackingWestTankNode.ogg",duration: "2.13"},{file: "A_BotStatus_Othello_CenterNodeCaptured.ogg",duration: "1.78"},{file: "A_BotStatus_Othello_HeadingTowardSouthTankNode.ogg",duration: "2.04"},{file: "A_BotStatus_Othello_HeadingTowardWestNode.ogg",duration: "1.91"},{file: "A_BotStatus_Othello_HeadingTowardTankNode.ogg",duration: "1.76"},{file: "A_BotStatus_Othello_HeadingTowardWestTankNode.ogg",duration: "2.12"},{file: "A_BotStatus_Othello_HeadingTowardWestRoadNode.ogg",duration: "2.38"},{file: "A_BotStatus_Othello_HeadingTowardWestAirNode.ogg",duration: "2.10"},{file: "A_BotStatus_Othello_HilltopNodeCaptured.ogg",duration: "1.90"},{file: "A_BotStatus_Othello_IHaveTheOrb.ogg",duration: "1.39"},{file: "A_BotStatus_Othello_IHaveTheFlag.ogg",duration: "1.71"},{file: "A_BotStatus_Othello_ImInPosition.ogg",duration: "1.34"},{file: "A_BotStatus_Othello_ImOnIt.ogg",duration: "0.81"},{file: "A_BotStatus_Othello_ImOnYourTeam.ogg",duration: "1.70"},{file: "A_BotStatus_Othello_ImBeingOverrun.ogg",duration: "1.37"},{file: "A_BotStatus_Othello_ImOnYourTeamIdiot.ogg",duration: "1.90"},{file: "A_BotStatus_Othello_INeedBackup.ogg",duration: "1.18"},{file: "A_BotStatus_Othello_Incoming.ogg",duration: "1.09"},{file: "A_BotStatus_Othello_ImTakingHeavyFire.ogg",duration: "1.58"},{file: "A_BotStatus_Othello_InPosition.ogg",duration: "1.05"},{file: "A_BotStatus_Othello_INeedSomeBackup.ogg",duration: "1.33"},{file: "A_BotStatus_Othello_InTheBlueBase.ogg",duration: "1.34"},{file: "A_BotStatus_Othello_Midfield.ogg",duration: "1.09"},{file: "A_BotStatus_Othello_InTheRedBase.ogg",duration: "1.33"},{file: "A_BotStatus_Othello_IveGotTheOrb.ogg",duration: "1.18"},{file: "A_BotStatus_Othello_IveGotYourBack.ogg",duration: "1.16"},{file: "A_BotStatus_Othello_IveGotOurFlag.ogg",duration: "1.52"},{file: "A_BotStatus_Othello_MidfieldHigh.ogg",duration: "1.31"},{file: "A_BotStatus_Othello_MidfieldLow.ogg",duration: "1.40"},{file: "A_BotStatus_Othello_MineNodeCaptured.ogg",duration: "1.68"},{file: "A_BotStatus_Othello_NearTheBlueBase.ogg",duration: "1.68"},{file: "A_BotStatus_Othello_Nice.ogg",duration: "1.52"},{file: "A_BotStatus_Othello_NorthMineNodeCaptured.ogg",duration: "1.91"},{file: "A_BotStatus_Othello_NearTheRedBase.ogg",duration: "1.52"},{file: "A_BotStatus_Othello_NorthTankNodeCaptured.ogg",duration: "1.70"},{file: "A_BotStatus_Othello_OnIt.ogg",duration: "0.61"},{file: "A_BotStatus_Othello_RogerThat.ogg",duration: "0.95"},{file: "A_BotStatus_Othello_Roger.ogg",duration: "0.75"},{file: "A_BotStatus_Othello_PrimeNodeCaptured.ogg",duration: "2.03"},{file: "A_BotStatus_Othello_Sniper.ogg",duration: "1.06"},{file: "A_BotStatus_Othello_SameTeam.ogg",duration: "1.49"},{file: "A_BotStatus_Othello_SomebodyGetOurFlagBack.ogg",duration: "1.77"},{file: "A_BotStatus_Othello_SouthMineNodeCaptured.ogg",duration: "2.09"},{file: "A_BotStatus_Othello_SouthTankNodeCaptured.ogg",duration: "2.01"},{file: "A_BotStatus_Othello_SuppressTheSniper.ogg",duration: "1.44"},{file: "A_BotStatus_Othello_TankNodeCaptured.ogg",duration: "1.37"},{file: "A_BotStatus_Othello_UnderHeavyAttack.ogg",duration: "1.21"},{file: "A_BotStatus_Othello_WestAirNodeCaptured.ogg",duration: "1.96"},{file: "A_BotStatus_Othello_WestNodeCaptured.ogg",duration: "1.59"},{file: "A_BotStatus_Othello_YouKnowIt.ogg",duration: "1.02"},{file: "A_BotStatus_Othello_WestRoadNodeCaptured.ogg",duration: "1.84"},{file: "A_BotStatus_Othello_WestTankNodeCaptured.ogg",duration: "1.87"},{file: "A_BotStatus_Othello_YourTeam.ogg",duration: "1.22"},{file: "A_Taunt_Othello_AndStayDown.ogg",duration: "1.25"},{file: "A_Taunt_Othello_Bam.ogg",duration: "0.92"},{file: "A_Taunt_Othello_BeatDown.ogg",duration: "1.66"},{file: "A_Taunt_Othello_AwwYeah.ogg",duration: "3.78"},{file: "A_Taunt_Othello_Biohazard.ogg",duration: "1.33"},{file: "A_Taunt_Othello_Booya.ogg",duration: "1.14"},{file: "A_Taunt_Othello_ComeOnIAintJustDickinAroundHere.ogg",duration: "2.18"},{file: "A_Taunt_Othello_DamnStraight.ogg",duration: "1.22"},{file: "A_Taunt_Othello_DeathWarrantEnforced.ogg",duration: "2.24"},{file: "A_Taunt_Othello_DontYouLikeMyGrill.ogg",duration: "1.58"},{file: "A_Taunt_Othello_FeelImpact.ogg",duration: "3.21"},{file: "A_Taunt_Othello_DoTheDance.ogg",duration: "3.60"},{file: "A_Taunt_Othello_FightThroughThePain.ogg",duration: "1.50"},{file: "A_Taunt_Othello_HappyDamn.ogg",duration: "1.63"},{file: "A_Taunt_Othello_FoShizzle.ogg",duration: "1.07"},{file: "A_Taunt_Othello_FlakAttack.ogg",duration: "1.17"},{file: "A_Taunt_Othello_HearIComeBabyClenchThemCheeks.ogg",duration: "3.16"},{file: "A_Taunt_Othello_HolyShit.ogg",duration: "1.49"},{file: "A_Taunt_Othello_HearIComeBabyClenchThemCheeks2.ogg",duration: "2.95"},{file: "A_Taunt_Othello_ILovesItMessy.ogg",duration: "2.31"},{file: "A_Taunt_Othello_ImaBeatYoAss.ogg",duration: "1.95"},{file: "A_Taunt_Othello_ICantFeelMyLegs.ogg",duration: "1.52"},{file: "A_Taunt_Othello_ImaGetYoAss.ogg",duration: "1.71"},{file: "A_Taunt_Othello_ImHit.ogg",duration: "0.77"},{file: "A_Taunt_Othello_ImOnFire.ogg",duration: "2.22"},{file: "A_Taunt_Othello_ISwearIHadThatOne.ogg",duration: "1.67"},{file: "A_Taunt_Othello_itsTheArmyOfMeBaby.ogg",duration: "2.23"},{file: "A_Taunt_Othello_Impossible.ogg",duration: "1.42"},{file: "A_Taunt_Othello_MadeMyPoint.ogg",duration: "1.81"},{file: "A_Taunt_Othello_ManICouldDoThisAllDay.ogg",duration: "2.46"},{file: "A_Taunt_Othello_KeepItUp.ogg",duration: "0.86"},{file: "A_Taunt_Othello_Mang.ogg",duration: "0.78"},{file: "A_Taunt_Othello_NoWay.ogg",duration: "1.66"},{file: "A_Taunt_Othello_NailedTheFlagCarrier.ogg",duration: "2.06"},{file: "A_Taunt_Othello_NowImMad.ogg",duration: "2.20"},{file: "A_Taunt_Othello_NowThatsWhatImTalkingBout.ogg",duration: "1.90"},{file: "A_Taunt_Othello_ManIJustGotHosed.ogg",duration: "2.62"},{file: "A_Taunt_Othello_OhSmack.ogg",duration: "1.45"},{file: "A_Taunt_Othello_OhYeah.ogg",duration: "1.93"},{file: "A_Taunt_Othello_OneShotOneKill.ogg",duration: "1.69"},{file: "A_Taunt_Othello_Ouch.ogg",duration: "0.94"},{file: "A_Taunt_Othello_OhIFeelThatNow.ogg",duration: "1.77"},{file: "A_Taunt_Othello_StandUpAndFight.ogg",duration: "1.48"},{file: "A_Taunt_Othello_Respect.ogg",duration: "1.18"},{file: "A_Taunt_Othello_Shocking.ogg",duration: "1.67"},{file: "A_Taunt_Othello_ThatJustAintRight.ogg",duration: "1.31"},{file: "A_Taunt_Othello_TakeThatFools.ogg",duration: "1.56"},{file: "A_Taunt_Othello_WhasupWitDatFool.ogg",duration: "1.32"},{file: "A_Taunt_Othello_WeHaveTheFlagLetsBringItHome.ogg",duration: "2.93"},{file: "A_Taunt_Othello_YeahBitch.ogg",duration: "1.85"},{file: "A_Taunt_Othello_YouWantMoreBeatDown.ogg",duration: "1.66"},{file: "A_Taunt_Othello_YouWantSomeOfMe.ogg",duration: "1.21"},{file: "A_Taunt_Othello_UpsetDamn.ogg",duration: "0.82"},{file: "A_Taunt_Othello_YeahThisIsGettingFunNow.ogg",duration: "2.47"},];

const bishopFiles = [{file: "A_Banter_Bishop_AllWillSingPraisesOfTheMostHigh.ogg",duration: "3.22"},{file: "A_BotStatus_IGMale_EnemyFlagCarrierGoingLow.ogg",duration: "2.03"},{file: "A_BotStatus_IGMale_EnemyFlagCarrierHere.ogg",duration: "1.65"},{file: "A_BotStatus_IGMale_EnemyFury.ogg",duration: "1.18"},{file: "A_BotStatus_IGMale_EnemyGoliath.ogg",duration: "1.19"},{file: "A_BotStatus_IGMale_EnemyGoliathDestroyed.ogg",duration: "1.90"},{file: "A_BotStatus_IGMale_EnemyHellbender.ogg",duration: "1.31"},{file: "A_BotStatus_IGMale_EnemyLeviathan.ogg",duration: "1.28"},{file: "A_BotStatus_IGMale_EnemyHellfire.ogg",duration: "1.31"},{file: "A_BotStatus_IGMale_EnemyLeviathanDestroyed.ogg",duration: "1.90"},{file: "A_BotStatus_IGMale_EnemyNemesis.ogg",duration: "1.27"},{file: "A_BotStatus_IGMale_EnemyNightshade.ogg",duration: "1.30"},{file: "A_BotStatus_IGMale_EnemyOrbCarrierDown.ogg",duration: "1.74"},{file: "A_BotStatus_IGMale_EnemyOrbCarrier.ogg",duration: "1.40"},{file: "A_BotStatus_IGMale_EnemyPaladin.ogg",duration: "1.21"},{file: "A_BotStatus_IGMale_EnemyPrimeNodeCaptured.ogg",duration: "1.98"},{file: "A_BotStatus_IGMale_EnemyRaptor.ogg",duration: "1.20"},{file: "A_BotStatus_IGMale_EnemyScavenger.ogg",duration: "1.29"},{file: "A_BotStatus_IGMale_EnemyStealthbender.ogg",duration: "1.41"},{file: "A_BotStatus_IGMale_FloodgateNodeCaptured.ogg",duration: "1.93"},{file: "A_BotStatus_IGMale_GotIt.ogg",duration: "0.57"},{file: "A_BotStatus_IGMale_FriendlyFire.ogg",duration: "1.05"},{file: "A_BotStatus_IGMale_GotYourBack.ogg",duration: "0.96"},{file: "A_BotStatus_IGMale_HeadingForTheBerserk.ogg",duration: "1.30"},{file: "A_BotStatus_IGMale_HeadingForTheJumpBoots.ogg",duration: "1.56"},{file: "A_BotStatus_IGMale_HeadingForTheSuperhealth.ogg",duration: "1.57"},{file: "A_BotStatus_IGMale_HeadingForTheShapedCharge.ogg",duration: "1.57"},{file: "A_BotStatus_IGMale_HeadingForTheInvisibility.ogg",duration: "1.58"},{file: "A_BotStatus_IGMale_HeadingForTheRedeemer.ogg",duration: "1.56"},{file: "A_BotStatus_IGMale_HeadingForTheShieldBelt.ogg",duration: "1.71"},{file: "A_BotStatus_IGMale_HeadingForTheUDamage.ogg",duration: "1.60"},{file: "A_BotStatus_IGMale_HeadingTowardAirNode.ogg",duration: "1.43"},{file: "A_Banter_Bishop_AndThereCameAStormOfSand.ogg",duration: "3.35"},{file: "A_Banter_Bishop_CanstThouDrawOutLeviathan.ogg",duration: "2.97"},{file: "A_Banter_Bishop_IGoToGlory.ogg",duration: "2.15"},{file: "A_Banter_Bishop_IndeedItTakesAllTheRunning.ogg",duration: "4.95"},{file: "A_BotStatus_IGMale_HeadingTowardCenterNode.ogg",duration: "1.59"},{file: "A_BotStatus_IGMale_HeadingTowardBridgeNode.ogg",duration: "1.61"},{file: "A_Banter_Bishop_IQuestionTheWisdom.ogg",duration: "5.54"},{file: "A_BotStatus_IGMale_HeadingTowardEastNode.ogg",duration: "1.55"},{file: "A_Banter_Bishop_ItIsACowardsWeapon.ogg",duration: "1.78"},{file: "A_Banter_Bishop_ItsLikeSnipingTanks.ogg",duration: "2.93"},{file: "A_Banter_Bishop_LikeNirvanaAndHell.ogg",duration: "4.29"},{file: "A_BotStatus_IGMale_HeadingTowardEastAirNode.ogg",duration: "1.70"},{file: "A_Banter_Bishop_ManufacturingGodsLikenessIsASin.ogg",duration: "3.24"},{file: "A_Banter_Bishop_MayThoseWhoCurseDaysCurseThatDay.ogg",duration: "6.63"},{file: "A_Banter_Bishop_MyDeliveranceShallBeSwift.ogg",duration: "2.27"},{file: "A_Banter_Bishop_NowIsTheTimeToStrike.ogg",duration: "2.26"},{file: "A_BotStatus_IGMale_HeadingTowardEastRoadNode.ogg",duration: "1.81"},{file: "A_Banter_Bishop_OneShotOneKill.ogg",duration: "2.31"},{file: "A_Banter_Bishop_SniperInPosition.ogg",duration: "1.73"},{file: "A_Banter_Bishop_SoManyLostSouls.ogg",duration: "2.39"},{file: "A_Banter_Bishop_TheFurySignifiesNothing.ogg",duration: "4.05"},{file: "A_BotStatus_IGMale_HeadingTowardEastTankNode.ogg",duration: "1.90"},{file: "A_Banter_Bishop_ThereIsThatLeviathan.ogg",duration: "4.29"},{file: "A_Banter_Bishop_TheSniperRifleIsMine.ogg",duration: "2.70"},{file: "A_Banter_Bishop_TheSpiritIsWilling.ogg",duration: "3.88"},{file: "A_Banter_Bishop_ThisIsTheSacredOldCity.ogg",duration: "3.30"},{file: "A_BotStatus_IGMale_HeadingTowardEnemyCore.ogg",duration: "1.63"},{file: "A_Banter_Bishop_ThisIsWhyWeFight.ogg",duration: "2.01"},{file: "A_Banter_Bishop_WeShallTakeRevenge.ogg",duration: "3.24"},{file: "A_BotStatus_Bishop_Acknowledged.ogg",duration: "1.20"},{file: "A_BotStatus_IGMale_HeadingTowardEnemyPrimeNode.ogg",duration: "1.95"},{file: "A_BotStatus_Bishop_Affirmative.ogg",duration: "1.19"},{file: "A_BotStatus_Bishop_AllClear.ogg",duration: "1.31"},{file: "A_BotStatus_Bishop_AreaSecure.ogg",duration: "1.36"},{file: "A_BotStatus_Bishop_AsYouRequest.ogg",duration: "1.62"},{file: "A_BotStatus_Bishop_CoveringYou.ogg",duration: "0.88"},{file: "A_BotStatus_Bishop_EnemyFlagCarrier.ogg",duration: "1.67"},{file: "A_BotStatus_Bishop_EnemyFlagCarrierDown.ogg",duration: "1.96"},{file: "A_BotStatus_IGMale_HeadingTowardFloodgateNode.ogg",duration: "1.73"},{file: "A_BotStatus_Bishop_EnemyFlagCarrierGoingHigh.ogg",duration: "2.32"},{file: "A_BotStatus_Bishop_EnemyFlagCarrierGoingLow.ogg",duration: "1.97"},{file: "A_BotStatus_Bishop_EnemyFlagCarrierHere.ogg",duration: "1.78"},{file: "A_BotStatus_Bishop_EnemyOrbCarrier.ogg",duration: "1.70"},{file: "A_BotStatus_IGMale_HeadingTowardHillsideNode.ogg",duration: "1.77"},{file: "A_BotStatus_Bishop_EnemyOrbCarrierDown.ogg",duration: "2.04"},{file: "A_BotStatus_IGMale_HeadingTowardHilltopNode.ogg",duration: "1.71"},{file: "A_BotStatus_Bishop_FlyForthOnWingsOfJustice.ogg",duration: "3.19"},{file: "A_BotStatus_Bishop_FriendlyFire.ogg",duration: "1.21"},{file: "A_BotStatus_Bishop_GotYourBack.ogg",duration: "1.09"},{file: "A_BotStatus_Bishop_IHaveTheFlag.ogg",duration: "1.32"},{file: "A_BotStatus_Bishop_IHaveTheOrb.ogg",duration: "1.68"},{file: "A_BotStatus_Bishop_ImBeingOverrun.ogg",duration: "1.27"},{file: "A_BotStatus_Bishop_ImOnIt.ogg",duration: "0.94"},{file: "A_BotStatus_Bishop_ImOnYourTeam.ogg",duration: "1.43"},{file: "A_BotStatus_IGMale_HeadingTowardMineNode.ogg",duration: "1.57"},{file: "A_BotStatus_Bishop_ImOnYourTeamIdiot.ogg",duration: "1.81"},{file: "A_BotStatus_IGMale_HeadingTowardNorthMineNode.ogg",duration: "1.84"},{file: "A_BotStatus_Bishop_ImTakingHeavyFire.ogg",duration: "1.50"},{file: "A_BotStatus_Bishop_Incoming.ogg",duration: "1.00"},{file: "A_BotStatus_Bishop_INeedBackup.ogg",duration: "1.19"},{file: "A_BotStatus_Bishop_INeedSomeBackup.ogg",duration: "1.32"},{file: "A_BotStatus_Bishop_InPosition.ogg",duration: "1.02"},{file: "A_BotStatus_IGMale_HeadingTowardNorthTankNode.ogg",duration: "1.82"},{file: "A_BotStatus_Bishop_IveGotOurFlag.ogg",duration: "1.30"},{file: "A_BotStatus_Bishop_IveGotTheFlag.ogg",duration: "1.29"},{file: "A_BotStatus_Bishop_IveGotTheOrb.ogg",duration: "1.54"},{file: "A_BotStatus_Bishop_IveGotYourBack.ogg",duration: "1.51"},{file: "A_BotStatus_IGMale_HeadingTowardOurCore.ogg",duration: "1.53"},{file: "A_BotStatus_Bishop_Midfield.ogg",duration: "1.01"},{file: "A_BotStatus_Bishop_MovingIntoPosition.ogg",duration: "1.56"},{file: "A_BotStatus_IGMale_HeadingTowardPrimeNode.ogg",duration: "1.62"},{file: "A_BotStatus_Bishop_Nice.ogg",duration: "1.11"},{file: "A_BotStatus_Bishop_SameTeam.ogg",duration: "1.28"},{file: "A_BotStatus_Bishop_YourTeam.ogg",duration: "0.88"},{file: "A_BotStatus_Bishop_SomebodyGetOurFlagBack.ogg",duration: "1.75"},{file: "A_BotStatus_IGMale_HeadingTowardSouthMineNode.ogg",duration: "1.83"},{file: "A_BotStatus_Bishop_SuppressTheSniper.ogg",duration: "1.52"},{file: "A_BotStatus_Bishop_YesSir.ogg",duration: "0.91"},{file: "A_BotStatus_Bishop_UnderHeavyAttack.ogg",duration: "1.42"},{file: "A_BotStatus_Bishop_Sniper.ogg",duration: "0.84"},{file: "A_BotStatus_IGMale_HeadingTowardTankNode.ogg",duration: "1.58"},{file: "A_BotStatus_IGMale_HeadingTowardSouthTankNode.ogg",duration: "1.87"},{file: "A_BotStatus_IGMale_Affirmative.ogg",duration: "0.85"},{file: "A_BotStatus_IGMale_Acknowledged.ogg",duration: "0.93"},{file: "A_BotStatus_IGMale_HeadingTowardWestAirNode.ogg",duration: "1.75"},{file: "A_BotStatus_IGMale_AirNodeCaptured.ogg",duration: "1.56"},{file: "A_BotStatus_IGMale_AllClear.ogg",duration: "0.87"},{file: "A_BotStatus_IGMale_AttackingAirNode.ogg",duration: "1.54"},{file: "A_BotStatus_IGMale_AreaSecure.ogg",duration: "1.11"},{file: "A_BotStatus_IGMale_AttackingBridgeNode.ogg",duration: "1.65"},{file: "A_BotStatus_IGMale_HeadingTowardWestNode.ogg",duration: "1.41"},{file: "A_BotStatus_IGMale_AttackingCenterNode.ogg",duration: "1.66"},{file: "A_BotStatus_IGMale_AttackingEastAirNode.ogg",duration: "1.74"},{file: "A_BotStatus_IGMale_AttackingEastNode.ogg",duration: "1.60"},{file: "A_BotStatus_IGMale_HeadingTowardWestRoadNode.ogg",duration: "1.90"},{file: "A_BotStatus_IGMale_AttackingEastTankNode.ogg",duration: "1.89"},{file: "A_BotStatus_IGMale_AttackingEnemyCore.ogg",duration: "1.53"},{file: "A_BotStatus_IGMale_AttackingEnemyPrimeNode.ogg",duration: "1.99"},{file: "A_BotStatus_IGMale_HeadingTowardWestTankNode.ogg",duration: "1.84"},{file: "A_BotStatus_IGMale_AttackingFloodgateNode.ogg",duration: "1.89"},{file: "A_BotStatus_IGMale_AttackingHillsideNode.ogg",duration: "1.88"},{file: "A_BotStatus_IGMale_HilltopNodeCaptured.ogg",duration: "1.73"},{file: "A_BotStatus_IGMale_AttackingHilltopNode.ogg",duration: "1.69"},{file: "A_BotStatus_IGMale_AttackingMineNode.ogg",duration: "1.61"},{file: "A_BotStatus_IGMale_HillsideNodeCaptured.ogg",duration: "1.89"},{file: "A_BotStatus_IGMale_AttackingNorthMineNode.ogg",duration: "1.86"},{file: "A_BotStatus_IGMale_AttackingNorthTankNode.ogg",duration: "1.89"},{file: "A_BotStatus_IGMale_IHaveTheFlag.ogg",duration: "1.26"},{file: "A_BotStatus_IGMale_AttackingOurCore.ogg",duration: "1.42"},{file: "A_BotStatus_IGMale_AttackingSouthMineNode.ogg",duration: "1.93"},{file: "A_BotStatus_IGMale_AttackingPrimeNode.ogg",duration: "1.70"},{file: "A_BotStatus_IGMale_AttackingSouthTankNode.ogg",duration: "1.91"},{file: "A_BotStatus_IGMale_AttackingTankNode.ogg",duration: "1.61"},{file: "A_BotStatus_IGMale_IHaveTheOrb.ogg",duration: "1.08"},{file: "A_BotStatus_IGMale_AttackingWestNode.ogg",duration: "1.45"},{file: "A_BotStatus_IGMale_AttackingWestAirNode.ogg",duration: "1.71"},{file: "A_BotStatus_IGMale_AttackingWestRoadNode.ogg",duration: "1.92"},{file: "A_BotStatus_IGMale_AttackingWestTankNode.ogg",duration: "1.84"},{file: "A_BotStatus_IGMale_ImInPosition.ogg",duration: "1.10"},{file: "A_BotStatus_IGMale_ImBeingOverrun.ogg",duration: "1.30"},{file: "A_BotStatus_IGMale_BridgeNodeCaptured.ogg",duration: "1.77"},{file: "A_BotStatus_IGMale_CenterNodeCaptured.ogg",duration: "1.80"},{file: "A_BotStatus_IGMale_ImOnIt.ogg",duration: "0.75"},{file: "A_BotStatus_IGMale_CoveringYou.ogg",duration: "0.81"},{file: "A_BotStatus_IGMale_DefendingEnemyCore.ogg",duration: "1.70"},{file: "A_BotStatus_IGMale_DefendingOurCore.ogg",duration: "1.50"},{file: "A_BotStatus_IGMale_EastAirNodeCaptured.ogg",duration: "1.77"},{file: "A_BotStatus_IGMale_EastNodeCaptured.ogg",duration: "1.48"},{file: "A_BotStatus_IGMale_EastRoadNodeCaptured.ogg",duration: "1.94"},{file: "A_BotStatus_IGMale_ImOnYourTeam.ogg",duration: "1.24"},{file: "A_BotStatus_IGMale_EastTankNodeCaptured.ogg",duration: "1.95"},{file: "A_BotStatus_IGMale_EnemyCicada.ogg",duration: "1.14"},{file: "A_BotStatus_IGMale_ImOnYourTeamIdiot.ogg",duration: "1.40"},{file: "A_BotStatus_IGMale_EnemyDarkwalker.ogg",duration: "1.30"},{file: "A_BotStatus_IGMale_EnemyDarkwalkerDestroyed.ogg",duration: "1.99"},{file: "A_BotStatus_IGMale_EnemyFlagCarrier.ogg",duration: "1.55"},{file: "A_BotStatus_IGMale_ImTakingHeavyFire.ogg",duration: "1.53"},{file: "A_BotStatus_IGMale_EnemyFlagCarrierDown.ogg",duration: "1.84"},{file: "A_BotStatus_IGMale_Incoming.ogg",duration: "1.23"},{file: "A_BotStatus_IGMale_EnemyFlagCarrierGoingHigh.ogg",duration: "2.06"},{file: "A_BotStatus_IGMale_INeedSomeBackup.ogg",duration: "1.17"},{file: "A_BotStatus_IGMale_INeedBackup.ogg",duration: "1.07"},{file: "A_BotStatus_IGMale_InPosition.ogg",duration: "0.99"},{file: "A_BotStatus_IGMale_InTheRedBase.ogg",duration: "1.22"},{file: "A_BotStatus_IGMale_Midfield.ogg",duration: "0.94"},{file: "A_BotStatus_IGMale_IveGotOurFlag.ogg",duration: "1.25"},{file: "A_BotStatus_IGMale_InTheBlueBase.ogg",duration: "1.29"},{file: "A_BotStatus_IGMale_IveGotTheFlag.ogg",duration: "1.21"},{file: "A_BotStatus_IGMale_IveGotYourBack.ogg",duration: "1.10"},{file: "A_BotStatus_IGMale_IveGotTheOrb.ogg",duration: "1.20"},{file: "A_BotStatus_IGMale_MidfieldLow.ogg",duration: "1.28"},{file: "A_BotStatus_IGMale_MidfieldHigh.ogg",duration: "1.14"},{file: "A_BotStatus_IGMale_NearTheBlueBase.ogg",duration: "1.34"},{file: "A_BotStatus_IGMale_NearTheRedBase.ogg",duration: "1.33"},{file: "A_BotStatus_IGMale_MineNodeCaptured.ogg",duration: "1.70"},{file: "A_BotStatus_IGMale_Nice.ogg",duration: "0.91"},{file: "A_BotStatus_IGMale_NorthNodeCaptured.ogg",duration: "1.55"},{file: "A_BotStatus_IGMale_NorthTankNodeCaptured.ogg",duration: "1.90"},{file: "A_BotStatus_IGMale_OnIt.ogg",duration: "0.51"},{file: "A_BotStatus_IGMale_Roger.ogg",duration: "0.68"},{file: "A_BotStatus_IGMale_PrimeNodeCaptured.ogg",duration: "1.73"},{file: "A_BotStatus_IGMale_RogerThat.ogg",duration: "0.87"},{file: "A_BotStatus_IGMale_SameTeam.ogg",duration: "1.14"},{file: "A_BotStatus_IGMale_Sniper.ogg",duration: "0.82"},{file: "A_BotStatus_IGMale_SomebodyGetOurFlagBack.ogg",duration: "1.61"},{file: "A_BotStatus_IGMale_SouthTankNodeCaptured.ogg",duration: "1.98"},{file: "A_BotStatus_IGMale_SuppressTheSniper.ogg",duration: "1.35"},{file: "A_BotStatus_IGMale_SouthMineNodeCaptured.ogg",duration: "2.08"},{file: "A_BotStatus_IGMale_UnderHeavyAttack.ogg",duration: "1.27"},{file: "A_BotStatus_IGMale_TankNodeCaptured.ogg",duration: "1.59"},{file: "A_BotStatus_IGMale_WestAirNodeCaptured.ogg",duration: "1.93"},{file: "A_BotStatus_IGMale_WestNodeCaptured.ogg",duration: "1.66"},{file: "A_BotStatus_IGMale_WestRoadNodeCaptured.ogg",duration: "1.97"},{file: "A_BotStatus_IGMale_WestTankNodeCaptured.ogg",duration: "1.98"},{file: "A_BotStatus_IGMale_YourTeam.ogg",duration: "1.02"},{file: "A_Taunt_Bishop_ABriefMomentOfSilence.ogg",duration: "1.90"},{file: "A_Taunt_Bishop_AbsolutionForTheSoulsOfTheWretched.ogg",duration: "2.81"},{file: "A_Taunt_Bishop_AMartyrForMyCause.ogg",duration: "2.38"},{file: "A_Taunt_Bishop_AndTheAngelOfDeathSpreadHisWingsUponTheBlast.ogg",duration: "3.66"},{file: "A_Taunt_Bishop_AndHeTakethAway.ogg",duration: "2.08"},{file: "A_Taunt_Bishop_AtonementAndFireyWrath.ogg",duration: "2.83"},{file: "A_Taunt_Bishop_ASacrificeForTheCause.ogg",duration: "2.28"},{file: "A_Taunt_Bishop_BioHazard.ogg",duration: "1.26"},{file: "A_Taunt_Bishop_DepartAndEmbraceTheAfterlife.ogg",duration: "3.83"},{file: "A_Taunt_Bishop_DeathWarrantEnforced.ogg",duration: "2.56"},{file: "A_Taunt_Bishop_GreenIsDefinitelyYourColor.ogg",duration: "2.66"},{file: "A_Taunt_Bishop_HisJusticeIsSwift.ogg",duration: "2.21"},{file: "A_Taunt_Bishop_HeGuidesMyHand.ogg",duration: "2.33"},{file: "A_Taunt_Bishop_INeverAskedForThis.ogg",duration: "1.67"},{file: "A_Taunt_Bishop_IAmButAnInstrumentOfDeath.ogg",duration: "2.80"},{file: "A_Taunt_Bishop_Indeed.ogg",duration: "1.38"},{file: "A_Taunt_Bishop_ItWasHisWill.ogg",duration: "1.71"},{file: "A_Taunt_Bishop_LoThatIWalkInTheValleyOfShadows.ogg",duration: "3.50"},{file: "A_Taunt_Bishop_ISmoteTheeFlagCarrier.ogg",duration: "2.85"},{file: "A_Taunt_Bishop_MadeInHisImageDestroyedInHisName.ogg",duration: "4.11"},{file: "A_Taunt_Bishop_MeetYourMaker.ogg",duration: "1.73"},{file: "A_Taunt_Bishop_SweetRapture.ogg",duration: "2.25"},{file: "A_Taunt_Bishop_OohThatWasMessy.ogg",duration: "2.20"},{file: "A_Taunt_Bishop_Shocking.ogg",duration: "1.13"},{file: "A_Taunt_Bishop_OneShotOneKill.ogg",duration: "2.50"},{file: "A_Taunt_Bishop_SmoteDownInTheNameOfVengeance.ogg",duration: "3.19"},{file: "A_Taunt_Bishop_ThyWillBeDone.ogg",duration: "1.92"},{file: "A_Taunt_Bishop_ThisIsMyRifleThisIsMyGun.ogg",duration: "4.14"},{file: "A_Taunt_Bishop_ThereIsNoMercyForYourKind.ogg",duration: "2.57"},{file: "A_Taunt_Bishop_ToFallOnTheBattlefieldIsToRiseAbove.ogg",duration: "4.04"},{file: "A_Taunt_Bishop_VengeanceShallBeMine.ogg",duration: "2.23"},{file: "A_Taunt_Bishop_Yes.ogg",duration: "1.05"},{file: "A_Taunt_IGMale_BadNews.ogg",duration: "1.07"},{file: "A_Taunt_Bishop_YourDayOfJudgementIsAtHand.ogg",duration: "2.51"},{file: "A_Taunt_IGMale_AndStayDown.ogg",duration: "1.54"},{file: "A_Taunt_IGMale_Biohazard.ogg",duration: "1.21"},{file: "A_Taunt_IGMale_DamnImGood.ogg",duration: "1.42"},{file: "A_Taunt_IGMale_FeelImpact.ogg",duration: "2.12"},{file: "A_Taunt_Bishop_WeFaceHorrorAndDeathWroughtByManAndCallItWar.ogg",duration: "5.27"},{file: "A_Taunt_IGMale_FlakAttack.ogg",duration: "1.04"},{file: "A_Taunt_IGMale_GoodOne.ogg",duration: "1.01"},{file: "A_Taunt_IGMale_GreenIsYourColor.ogg",duration: "2.32"},{file: "A_Taunt_IGMale_GoodShot.ogg",duration: "0.92"},{file: "A_Taunt_IGMale_HoldStillDammit.ogg",duration: "1.38"},{file: "A_Taunt_IGMale_FYeah.ogg",duration: "1.16"},{file: "A_Taunt_IGMale_HolyShit.ogg",duration: "1.13"},{file: "A_Taunt_IGMale_DeathWarrantEnforced.ogg",duration: "1.60"},{file: "A_Taunt_IGMale_ImHit.ogg",duration: "0.76"},{file: "A_Taunt_IGMale_Impossible.ogg",duration: "1.06"},{file: "A_Taunt_IGMale_ImGoingDown.ogg",duration: "1.23"},{file: "A_Taunt_IGMale_ImOnFire.ogg",duration: "1.59"},{file: "A_Taunt_IGMale_ICantFeelMyLegs.ogg",duration: "1.60"},{file: "A_Taunt_IGMale_KIA.ogg",duration: "1.33"},{file: "A_Taunt_IGMale_MadeMyPoint.ogg",duration: "1.76"},{file: "A_Taunt_IGMale_KeepItUp.ogg",duration: "0.92"},{file: "A_Taunt_IGMale_Medic.ogg",duration: "0.79"},{file: "A_Taunt_IGMale_ManDown.ogg",duration: "1.16"},{file: "A_Taunt_IGMale_NailedTheFlagCarrier.ogg",duration: "1.66"},{file: "A_Taunt_IGMale_NiceShot.ogg",duration: "1.08"},{file: "A_Taunt_IGMale_Next.ogg",duration: "0.86"},{file: "A_Taunt_IGMale_OhSmack.ogg",duration: "1.34"},{file: "A_Taunt_IGMale_OneShotOneKill.ogg",duration: "1.90"},{file: "A_Taunt_IGMale_OhYeah.ogg",duration: "1.17"},{file: "A_Taunt_IGMale_Ownage.ogg",duration: "1.10"},{file: "A_Taunt_IGMale_RightBetweenTheEyes.ogg",duration: "1.83"},{file: "A_Taunt_IGMale_Shocking.ogg",duration: "1.07"},{file: "A_Taunt_IGMale_Sick.ogg",duration: "0.88"},{file: "A_Taunt_IGMale_SonOfABitch.ogg",duration: "1.78"},{file: "A_Taunt_IGMale_TakeIt.ogg",duration: "0.62"},{file: "A_Taunt_IGMale_StepAside.ogg",duration: "1.28"},{file: "A_Taunt_IGMale_ThatHadToHurt.ogg",duration: "1.61"},{file: "A_Taunt_IGMale_ThatWasNasty.ogg",duration: "1.45"},{file: "A_Taunt_IGMale_ThatWasMessy.ogg",duration: "1.96"},{file: "A_Taunt_IGMale_WelcomeToBasicTraining.ogg",duration: "2.05"},{file: "A_Taunt_IGMale_TryThatAgain.ogg",duration: "1.29"},{file: "A_Taunt_IGMale_WhoWantsSome.ogg",duration: "1.18"},];


const jesterFiles = [{file: "A_Banter_Jester_AllINeedIsABigCat.ogg",duration: "3.09"},{file: "A_BotStatus_Jester_AttackingEastNode.ogg",duration: "1.27"},{file: "A_BotStatus_Jester_AttackingEastRoadNode.ogg",duration: "1.51"},{file: "A_BotStatus_Jester_AttackingEnemyCore.ogg",duration: "1.48"},{file: "A_BotStatus_Jester_AttackingEnemyPrimeNode.ogg",duration: "1.57"},{file: "A_BotStatus_Jester_AttackingEastTankNode.ogg",duration: "1.54"},{file: "A_BotStatus_Jester_AttackingMineNode.ogg",duration: "1.35"},{file: "A_BotStatus_Jester_AttackingNorthMineNode.ogg",duration: "1.63"},{file: "A_BotStatus_Jester_AttackingFloodgateNode.ogg",duration: "1.42"},{file: "A_BotStatus_Jester_AttackingOurCore.ogg",duration: "1.26"},{file: "A_BotStatus_Jester_AttackingNorthTankNode.ogg",duration: "1.54"},{file: "A_BotStatus_Jester_AttackingSouthMineNode.ogg",duration: "1.71"},{file: "A_BotStatus_Jester_AttackingTankNode.ogg",duration: "1.23"},{file: "A_BotStatus_Jester_AttackingSouthTankNode.ogg",duration: "1.70"},{file: "A_BotStatus_Jester_AttackingPrimeNode.ogg",duration: "1.25"},{file: "A_BotStatus_Jester_AttackingWestRoadNode.ogg",duration: "1.42"},{file: "A_BotStatus_Jester_AttackingWestNode.ogg",duration: "1.28"},{file: "A_BotStatus_Jester_AttackingWestTankNode.ogg",duration: "1.55"},{file: "A_BotStatus_Jester_BridgeNodeCaptured.ogg",duration: "1.42"},{file: "A_BotStatus_Jester_EnemyCicada.ogg",duration: "1.08"},{file: "A_BotStatus_Jester_DefendingEnemyCore.ogg",duration: "1.51"},{file: "A_BotStatus_Jester_CenterNodeCaptured.ogg",duration: "1.59"},{file: "A_BotStatus_Jester_DefendingOurCore.ogg",duration: "1.28"},{file: "A_BotStatus_Jester_EastNodeCaptured.ogg",duration: "1.38"},{file: "A_BotStatus_Jester_EastRoadNodeCaptured.ogg",duration: "1.58"},{file: "A_BotStatus_Jester_EastTankNodeCaptured.ogg",duration: "1.67"},{file: "A_Banter_Jester_AllRightNowUnload.ogg",duration: "2.56"},{file: "A_Banter_Jester_AndTheSnowBunniesAreWaiting.ogg",duration: "2.87"},{file: "A_Banter_Jester_AnyoneThinkThatDarkwalkerLooks.ogg",duration: "3.75"},{file: "A_BotStatus_Jester_CoveringYou.ogg",duration: "0.98"},{file: "A_Banter_Jester_AreYouNuts.ogg",duration: "3.46"},{file: "A_Banter_Jester_ASlowZoneIsTheOnlyChance.ogg",duration: "3.25"},{file: "A_Banter_Jester_CmonGuysThisIsEasy.ogg",duration: "6.45"},{file: "A_Banter_Jester_ComeOnYouAfraidOfA.ogg",duration: "2.61"},{file: "A_Banter_Jester_DontIgorneTheSideNodes.ogg",duration: "2.65"},{file: "A_Banter_Jester_GolzangiNavy.ogg",duration: "1.71"},{file: "A_Banter_Jester_EatingBishopsCooking.ogg",duration: "4.34"},{file: "A_BotStatus_Jester_EnemyDarkwalker.ogg",duration: "1.18"},{file: "A_Banter_Jester_EverybodyInThisThingIsUnstoppable.ogg",duration: "3.50"},{file: "A_Banter_Jester_DorkNightshadesAreInvisible.ogg",duration: "2.17"},{file: "A_Banter_Jester_GrabTheAVRILToTakeOut.ogg",duration: "2.62"},{file: "A_BotStatus_Jester_EnemyDarkwalkerDestroyed.ogg",duration: "1.76"},{file: "A_Banter_Jester_HmmmYoudThinkTheyWereAfraid.ogg",duration: "6.11"},{file: "A_Banter_Jester_IBetNoTerranHasEverSeen.ogg",duration: "3.04"},{file: "A_Banter_Jester_IKnewYouStillHadItInYou.ogg",duration: "1.56"},{file: "A_Banter_Jester_ImPissedToo.ogg",duration: "2.58"},{file: "A_Banter_Jester_ItsNotSoBad.ogg",duration: "4.17"},{file: "A_BotStatus_Jester_EnemyFlagCarrier.ogg",duration: "1.44"},{file: "A_Banter_Jester_ItsLikeItsLikeAPowerupPinata.ogg",duration: "2.93"},{file: "A_Banter_Jester_KeepItTight.ogg",duration: "3.53"},{file: "A_Banter_Jester_LetsLinkTogetherToHeal.ogg",duration: "2.11"},{file: "A_Banter_Jester_LetsGetThatOrb.ogg",duration: "1.73"},{file: "A_Banter_Jester_LittleCosyButRoomForTwo.ogg",duration: "2.17"},{file: "A_Banter_Jester_MaybeTheNextTimeWeGetTheOpportunity.ogg",duration: "4.09"},{file: "A_Banter_Jester_MoreDangerousThanNotShootingBack.ogg",duration: "2.04"},{file: "A_BotStatus_Jester_EnemyFlagCarrierDown.ogg",duration: "1.70"},{file: "A_Banter_Jester_MoreLikeSinkhole.ogg",duration: "3.26"},{file: "A_BotStatus_Jester_EnemyFlagCarrierGoingHigh.ogg",duration: "1.86"},{file: "A_Banter_Jester_OKSoYoureNot100.ogg",duration: "3.32"},{file: "A_Banter_Jester_RememberTheseAreCalled.ogg",duration: "3.69"},{file: "A_Banter_Jester_RumorSaysHeWasHumanOnce.ogg",duration: "3.05"},{file: "A_Banter_Jester_SeriouslyWereFightingForOurLives.ogg",duration: "2.99"},{file: "A_Banter_Jester_OkayYoureTheBoss.ogg",duration: "2.42"},{file: "A_BotStatus_Jester_EnemyFlagCarrierGoingLow.ogg",duration: "1.74"},{file: "A_Banter_Jester_SimpleLayout.ogg",duration: "4.58"},{file: "A_Banter_Jester_SoDoTheyCallThisPartTheFood.ogg",duration: "4.02"},{file: "A_Banter_Jester_SoMuchForTheNecrisDefenseGrid.ogg",duration: "2.21"},{file: "A_Banter_Jester_SoWereAreTheThousands.ogg",duration: "2.78"},{file: "A_Banter_Jester_StayOnHer.ogg",duration: "1.40"},{file: "A_Banter_Jester_SureRownanAndSteathyGoSoWellTogether.ogg",duration: "4.42"},{file: "A_Banter_Jester_TakeThisOutAndTheNextFightIsForReal.ogg",duration: "2.32"},{file: "A_Banter_Jester_TakingThemBothExposesTheEnemyCore.ogg",duration: "2.54"},{file: "A_Banter_Jester_TalkAboutDejaVu.ogg",duration: "1.98"},{file: "A_Banter_Jester_ThatExplainsWhyItsSoClean.ogg",duration: "1.84"},{file: "A_Banter_Jester_ThatsTheNecrisDarkwalker.ogg",duration: "1.80"},{file: "A_BotStatus_Jester_EnemyFury.ogg",duration: "1.06"},{file: "A_Banter_Jester_ThatsWhatISaid.ogg",duration: "1.11"},{file: "A_Banter_Jester_TheBasesAreSeperatedByALifeShield.ogg",duration: "2.30"},{file: "A_Banter_Jester_TheNecrisHaveAFury.ogg",duration: "3.39"},{file: "A_BotStatus_Jester_EnemyGoliath.ogg",duration: "1.12"},{file: "A_Banter_Jester_ThenHowWouldWeGetTo.ogg",duration: "1.59"},{file: "A_Banter_Jester_TheTwoNodesInTheCenterShouldDoTheTrick.ogg",duration: "2.18"},{file: "A_Banter_Jester_TheyCantSeeUsEither.ogg",duration: "2.74"},{file: "A_Banter_Jester_ThisHasToBeTheWeidest.ogg",duration: "2.56"},{file: "A_Banter_Jester_ThisIsAxonsEliteTheIronGuard.ogg",duration: "2.57"},{file: "A_Banter_Jester_TowersAreLitGrabThatPowerup.ogg",duration: "2.05"},{file: "A_BotStatus_Jester_EnemyGoliathDestroyed.ogg",duration: "1.67"},{file: "A_Banter_Jester_WannaBetItsSomethingWeHaveToShoot.ogg",duration: "2.49"},{file: "A_Banter_Jester_WeCouldUseTheTarydium.ogg",duration: "3.54"},{file: "A_Banter_Jester_WelcomeToTheNecrisCapitol.ogg",duration: "2.26"},{file: "A_BotStatus_Jester_EnemyHellbender.ogg",duration: "1.16"},{file: "A_Banter_Jester_WhatAreYouBabblingAbout.ogg",duration: "2.63"},{file: "A_Banter_Jester_WhoWouldTrustARobot.ogg",duration: "2.42"},{file: "A_Banter_Jester_WhoSaidTheyreAlive.ogg",duration: "1.36"},{file: "A_Banter_Jester_WildGuessHere.ogg",duration: "2.42"},{file: "A_Banter_Jester_YeahIfOnlyWeHadSomeoneGood.ogg",duration: "4.61"},{file: "A_BotStatus_Jester_EnemyHellfire.ogg",duration: "1.15"},{file: "A_BotStatus_Jester_EnemyLeviathan.ogg",duration: "1.28"},{file: "A_Banter_Jester_YeahSignMeUpForGetting.ogg",duration: "4.32"},{file: "A_Banter_Jester_YouMeanFLAG.ogg",duration: "2.06"},{file: "A_Banter_Jester_YeahIfYouGetTheirFlag.ogg",duration: "2.62"},{file: "A_Banter_Jester_YourBodyWillComeInLikeAMeteor.ogg",duration: "2.67"},{file: "A_Banter_Jester_YouWastedEnoughAmmo.ogg",duration: "2.56"},{file: "A_BotStatus_Jester_Acknowledged.ogg",duration: "0.93"},{file: "A_BotStatus_Jester_EnemyLeviathanDestroyed.ogg",duration: "1.85"},{file: "A_BotStatus_Jester_EnemyManta.ogg",duration: "1.01"},{file: "A_Banter_Jester_YouWantToTakeFiveGoAhead.ogg",duration: "2.73"},{file: "A_BotStatus_Jester_Affirmative.ogg",duration: "0.78"},{file: "A_BotStatus_Jester_AirNodeCaptured.ogg",duration: "1.34"},{file: "A_BotStatus_Jester_AreaSecure.ogg",duration: "1.11"},{file: "A_BotStatus_Jester_AttackingAirNode.ogg",duration: "1.12"},{file: "A_BotStatus_Jester_AllClear.ogg",duration: "0.81"},{file: "A_BotStatus_Jester_AttackingCenterNode.ogg",duration: "1.27"},{file: "A_BotStatus_Jester_EnemyNemesis.ogg",duration: "1.16"},{file: "A_BotStatus_Jester_AttackingBridgeNode.ogg",duration: "1.20"},{file: "A_BotStatus_Jester_EnemyNightshade.ogg",duration: "1.21"},{file: "A_BotStatus_Jester_EnemyOrbCarrier.ogg",duration: "1.36"},{file: "A_BotStatus_Jester_EnemyOrbCarrierDown.ogg",duration: "1.60"},{file: "A_BotStatus_Jester_EnemyRaptor.ogg",duration: "1.11"},{file: "A_BotStatus_Jester_EnemyPaladin.ogg",duration: "1.19"},{file: "A_BotStatus_Jester_EnemyPrimeNodeCaptured.ogg",duration: "1.75"},{file: "A_BotStatus_Jester_EnemyScorpion.ogg",duration: "1.12"},{file: "A_BotStatus_Jester_EnemyScavenger.ogg",duration: "1.25"},{file: "A_BotStatus_Jester_EnemyStealthbender.ogg",duration: "1.24"},{file: "A_BotStatus_Jester_EnemyViper.ogg",duration: "0.97"},{file: "A_BotStatus_Jester_FriendlyFire.ogg",duration: "1.06"},{file: "A_BotStatus_Jester_FloodgateNodeCaptured.ogg",duration: "1.49"},{file: "A_BotStatus_Jester_GotIt.ogg",duration: "0.69"},{file: "A_BotStatus_Jester_HeadingForTheBerserk.ogg",duration: "1.26"},{file: "A_BotStatus_Jester_GotYourBack.ogg",duration: "0.91"},{file: "A_BotStatus_Jester_HeadingForTheRedeemer.ogg",duration: "1.34"},{file: "A_BotStatus_Jester_HeadingForTheInvisibility.ogg",duration: "1.47"},{file: "A_BotStatus_Jester_HeadingForTheJumpBoots.ogg",duration: "1.46"},{file: "A_BotStatus_Jester_HeadingForTheShapedCharge.ogg",duration: "1.58"},{file: "A_BotStatus_Jester_HeadingForTheShieldBelt.ogg",duration: "1.51"},{file: "A_BotStatus_Jester_HeadingForTheSuperhealth.ogg",duration: "1.36"},{file: "A_BotStatus_Jester_HeadingTowardAirNode.ogg",duration: "1.25"},{file: "A_BotStatus_Jester_HeadingForTheUDamage.ogg",duration: "1.46"},{file: "A_BotStatus_Jester_HeadingTowardBridgeNode.ogg",duration: "1.35"},{file: "A_BotStatus_Jester_HeadingTowardCenterNode.ogg",duration: "1.38"},{file: "A_BotStatus_Jester_HeadingTowardEastNode.ogg",duration: "1.58"},{file: "A_BotStatus_Jester_HeadingTowardEastRoadNode.ogg",duration: "1.62"},{file: "A_BotStatus_Jester_HeadingTowardEnemyCore.ogg",duration: "1.57"},{file: "A_BotStatus_Jester_HeadingTowardEastTankNode.ogg",duration: "1.61"},{file: "A_BotStatus_Jester_HeadingTowardFloodgateNode.ogg",duration: "1.50"},{file: "A_BotStatus_Jester_HeadingTowardEnemyPrimeNode.ogg",duration: "1.82"},{file: "A_BotStatus_Jester_HeadingTowardNorthMineNode.ogg",duration: "1.72"},{file: "A_BotStatus_Jester_HeadingTowardMineNode.ogg",duration: "1.50"},{file: "A_BotStatus_Jester_HeadingTowardNorthTankNode.ogg",duration: "1.75"},{file: "A_BotStatus_Jester_HeadingTowardPrimeNode.ogg",duration: "1.52"},{file: "A_BotStatus_Jester_HeadingTowardOurCore.ogg",duration: "1.49"},{file: "A_BotStatus_Jester_HeadingTowardTankNode.ogg",duration: "1.46"},{file: "A_BotStatus_Jester_HeadingTowardSouthMineNode.ogg",duration: "1.65"},{file: "A_BotStatus_Jester_HeadingTowardSouthTankNode.ogg",duration: "1.66"},{file: "A_BotStatus_Jester_HeadingTowardWestNode.ogg",duration: "1.56"},{file: "A_BotStatus_Jester_HeadingTowardWestRoadNode.ogg",duration: "1.58"},{file: "A_BotStatus_Jester_HeadingTowardWestTankNode.ogg",duration: "1.55"},{file: "A_BotStatus_Jester_IHaveTheFlag.ogg",duration: "1.11"},{file: "A_BotStatus_Jester_IHaveTheOrb.ogg",duration: "0.93"},{file: "A_BotStatus_Jester_ImInPosition.ogg",duration: "1.06"},{file: "A_BotStatus_Jester_ImBeingOverrun.ogg",duration: "1.17"},{file: "A_BotStatus_Jester_ImOnYourTeam.ogg",duration: "1.31"},{file: "A_BotStatus_Jester_ImTakingHeavyFire.ogg",duration: "1.37"},{file: "A_BotStatus_Jester_ImOnYourTeamIdiot.ogg",duration: "1.53"},{file: "A_BotStatus_Jester_ImOnIt.ogg",duration: "0.58"},{file: "A_BotStatus_Jester_INeedBackup.ogg",duration: "1.05"},{file: "A_BotStatus_Jester_Incoming.ogg",duration: "0.87"},{file: "A_BotStatus_Jester_InPosition.ogg",duration: "0.83"},{file: "A_BotStatus_Jester_INeedSomeBackup.ogg",duration: "1.30"},{file: "A_BotStatus_Jester_InTheBlueBase.ogg",duration: "1.12"},{file: "A_BotStatus_Jester_InTheRedBase.ogg",duration: "1.12"},{file: "A_BotStatus_Jester_IveGotOurFlag.ogg",duration: "1.06"},{file: "A_BotStatus_Jester_IveGotTheFlag.ogg",duration: "1.14"},{file: "A_BotStatus_Jester_IveGotYourBack.ogg",duration: "1.07"},{file: "A_BotStatus_Jester_Midfield.ogg",duration: "0.85"},{file: "A_BotStatus_Jester_IveGotTheOrb.ogg",duration: "0.98"},{file: "A_BotStatus_Jester_MidfieldLow.ogg",duration: "1.18"},{file: "A_BotStatus_Jester_MidfieldHigh.ogg",duration: "1.03"},{file: "A_BotStatus_Jester_MineNodeCaptured.ogg",duration: "1.53"},{file: "A_BotStatus_Jester_NearTheBlueBase.ogg",duration: "1.18"},{file: "A_BotStatus_Jester_NearTheRedBase.ogg",duration: "1.18"},{file: "A_BotStatus_Jester_OnIt.ogg",duration: "0.64"},{file: "A_BotStatus_Jester_NorthMineNodeCaptured.ogg",duration: "1.63"},{file: "A_BotStatus_Jester_NorthTankNodeCaptured.ogg",duration: "1.80"},{file: "A_BotStatus_Jester_PrimeNodeCaptured.ogg",duration: "1.41"},{file: "A_BotStatus_Jester_RogerThat.ogg",duration: "0.78"},{file: "A_BotStatus_Jester_Roger.ogg",duration: "0.75"},{file: "A_BotStatus_Jester_Sniper.ogg",duration: "0.82"},{file: "A_BotStatus_Jester_SomebodyGetOurFlagBack.ogg",duration: "1.71"},{file: "A_BotStatus_Jester_SouthMineNodeCaptured.ogg",duration: "1.69"},{file: "A_BotStatus_Jester_SameTeam.ogg",duration: "1.10"},{file: "A_BotStatus_Jester_SouthTankNodeCaptured.ogg",duration: "1.78"},{file: "A_BotStatus_Jester_TankNodeCaptured.ogg",duration: "1.32"},{file: "A_BotStatus_Jester_UnderHeavyAttack.ogg",duration: "1.22"},{file: "A_BotStatus_Jester_WestNodeCaptured.ogg",duration: "1.36"},{file: "A_BotStatus_Jester_WestRoadNodeCaptured.ogg",duration: "1.60"},{file: "A_BotStatus_Jester_SuppressTheSniper.ogg",duration: "1.25"},{file: "A_BotStatus_Jester_WestTankNodeCaptured.ogg",duration: "1.62"},{file: "A_BotStatus_Jester_YourTeam.ogg",duration: "1.03"},{file: "A_MissionBriefing_Jester_RisingSun.ogg",duration: "11.82"},{file: "A_Taunt_Jester_AndAnotherThankYouVeryMuch.ogg",duration: "2.53"},{file: "A_Taunt_Jester_AndILookGoodDoingItToo.ogg",duration: "1.91"},{file: "A_Taunt_Jester_AnyoneOutThere.ogg",duration: "1.32"},{file: "A_Taunt_Jester_BeatenByAGirl.ogg",duration: "1.25"},{file: "A_Taunt_Jester_AndStayDown.ogg",duration: "1.75"},{file: "A_Taunt_Jester_Biohazard.ogg",duration: "1.21"},{file: "A_Taunt_Jester_BetterLuckNextTime.ogg",duration: "1.74"},{file: "A_Taunt_Jester_DeathWarrantEnforced.ogg",duration: "1.80"},{file: "A_Taunt_Jester_BoomBaby.ogg",duration: "1.29"},{file: "A_Taunt_Jester_Eliminated.ogg",duration: "1.95"},{file: "A_Taunt_Jester_BooYa.ogg",duration: "1.05"},{file: "A_Taunt_Jester_FlakAttack.ogg",duration: "1.24"},{file: "A_Taunt_Jester_Damn.ogg",duration: "1.04"},{file: "A_Taunt_Jester_FreezeFrameMoment.ogg",duration: "1.84"},{file: "A_Taunt_Jester_GoodOne.ogg",duration: "0.82"},{file: "A_Taunt_Jester_Bullshit.ogg",duration: "1.63"},{file: "A_Taunt_Jester_DamnImGood.ogg",duration: "1.54"},{file: "A_Taunt_Jester_GreenIsDefinitelyYourColor.ogg",duration: "2.55"},{file: "A_Taunt_Jester_HatingYou.ogg",duration: "1.39"},{file: "A_Taunt_Jester_HoldStillDamnit.ogg",duration: "1.50"},{file: "A_Taunt_Jester_IAmazeMyself.ogg",duration: "2.93"},{file: "A_Taunt_Jester_IDontWantThatShitInMyHair.ogg",duration: "1.83"},{file: "A_Taunt_Jester_IHateItWhenThatHappens.ogg",duration: "2.26"},{file: "A_Taunt_Jester_IJustSlaughteredThatGuy.ogg",duration: "1.81"},{file: "A_Taunt_Jester_IllRememberThat.ogg",duration: "1.46"},{file: "A_Taunt_Jester_IsThatYourBest.ogg",duration: "1.54"},{file: "A_Taunt_Jester_ItDoesntGetAnyBetterThanThat.ogg",duration: "2.17"},{file: "A_Taunt_Jester_IThinkIveMadeMyPoint.ogg",duration: "1.65"},{file: "A_Taunt_Jester_KeepItUp.ogg",duration: "0.88"},{file: "A_Taunt_Jester_NextTimeTryNotToSuck.ogg",duration: "2.31"},{file: "A_Taunt_Jester_NailedTheFlagCarrier.ogg",duration: "1.82"},{file: "A_Taunt_Jester_NiceMove.ogg",duration: "1.24"},{file: "A_Taunt_Jester_NotOneOfMyBetterMoments.ogg",duration: "1.96"},{file: "A_Taunt_Jester_NoWay.ogg",duration: "1.19"},{file: "A_Taunt_Jester_OhSmack.ogg",duration: "1.31"},{file: "A_Taunt_Jester_OhYeah.ogg",duration: "1.56"},{file: "A_Taunt_Jester_OneShotOneKill.ogg",duration: "1.99"},{file: "A_Taunt_Jester_SeeYa.ogg",duration: "1.31"},{file: "A_Taunt_Jester_Shocking.ogg",duration: "1.00"},{file: "A_Taunt_Jester_StepAside.ogg",duration: "1.23"},{file: "A_Taunt_Jester_ThatHadToHurt.ogg",duration: "1.54"},{file: "A_Taunt_Jester_ThatPlanFailed.ogg",duration: "2.04"},{file: "A_Taunt_Jester_ThatsJustWrong.ogg",duration: "2.77"},{file: "A_Taunt_Jester_ThatsOneForTheCameras.ogg",duration: "1.53"},{file: "A_Taunt_Jester_ThatsOneMoreForTheGirl.ogg",duration: "1.73"},{file: "A_Taunt_Jester_ThatsSoEmbarassing.ogg",duration: "2.15"},{file: "A_Taunt_Jester_ThatWasAMess.ogg",duration: "1.88"},{file: "A_Taunt_Jester_TopThat.ogg",duration: "1.19"},{file: "A_Taunt_Jester_WellThatJustSucked.ogg",duration: "1.66"},{file: "A_Taunt_Jester_WhoWantsSome.ogg",duration: "1.08"},{file: "A_Taunt_Jester_WhyAmIAlwaysFirstToGetShot.ogg",duration: "2.39"},{file: "A_Taunt_Jester_YoullFeelTheImpactOfThatOne.ogg",duration: "2.42"},{file: "A_MissionBriefing_Jester_Kargo.ogg",duration: "25.12"},];


const laurenFiles = [{file: "A_Banter_Lauren_HowDoILook.ogg",duration: "1.13"},{file: "A_BotStatus_Lauren_Incoming.ogg",duration: "0.94"},{file: "A_BotStatus_Lauren_INeedSomeBackup.ogg",duration: "1.53"},{file: "A_BotStatus_Lauren_ImTakingHeavyFire.ogg",duration: "1.74"},{file: "A_BotStatus_Lauren_INeedBackup.ogg",duration: "1.52"},{file: "A_BotStatus_Lauren_InPosition.ogg",duration: "1.06"},{file: "A_Banter_Lauren_LifeIsPainGetOverIt.ogg",duration: "3.07"},{file: "A_BotStatus_Lauren_IveGotOurFlag.ogg",duration: "1.29"},{file: "A_Banter_Lauren_Owned.ogg",duration: "1.03"},{file: "A_BotStatus_Lauren_Affirmative.ogg",duration: "1.05"},{file: "A_BotStatus_Lauren_AllClear.ogg",duration: "0.93"},{file: "A_BotStatus_Lauren_AreaSecure.ogg",duration: "1.38"},{file: "A_BotStatus_Lauren_AttackingEastAirNode.ogg",duration: "1.60"},{file: "A_BotStatus_Lauren_AttackingHillsideNode.ogg",duration: "1.50"},{file: "A_BotStatus_Lauren_AttackingHilltopNode.ogg",duration: "1.51"},{file: "A_BotStatus_Lauren_AttackingWestAirNode.ogg",duration: "1.54"},{file: "A_BotStatus_Lauren_CoveringYou.ogg",duration: "0.97"},{file: "A_BotStatus_Lauren_EnemyFlagCarrierGoingLow.ogg",duration: "2.17"},{file: "A_BotStatus_Lauren_EnemyFlagCarrier.ogg",duration: "1.53"},{file: "A_BotStatus_Lauren_EnemyFlagCarrierDown.ogg",duration: "2.17"},{file: "A_BotStatus_Lauren_EnemyFlagCarrierGoingHigh.ogg",duration: "2.17"},{file: "A_BotStatus_Lauren_IveGotTheFlag.ogg",duration: "1.32"},{file: "A_BotStatus_Lauren_EnemyOrbCarrier.ogg",duration: "1.36"},{file: "A_BotStatus_Lauren_EnemyOrbCarrierDown.ogg",duration: "1.70"},{file: "A_BotStatus_Lauren_EastAirNodeCaptured.ogg",duration: "1.79"},{file: "A_BotStatus_Lauren_GotIt.ogg",duration: "0.51"},{file: "A_BotStatus_Lauren_HeadingTowardEastAirNode.ogg",duration: "1.73"},{file: "A_BotStatus_Lauren_HeadingTowardHillsideNode.ogg",duration: "1.82"},{file: "A_BotStatus_Lauren_HeadingTowardHilltopNode.ogg",duration: "1.68"},{file: "A_BotStatus_Lauren_HeadingTowardWestAirNode.ogg",duration: "1.85"},{file: "A_BotStatus_Lauren_ImBeingOverrun.ogg",duration: "1.58"},{file: "A_BotStatus_Lauren_HillsideNodeCaptured.ogg",duration: "1.67"},{file: "A_BotStatus_Lauren_HilltopNodeCaptured.ogg",duration: "1.67"},{file: "A_BotStatus_Lauren_IHaveTheFlag.ogg",duration: "1.21"},{file: "A_BotStatus_Lauren_IHaveTheOrb.ogg",duration: "1.21"},{file: "A_BotStatus_Lauren_IveGotTheOrb.ogg",duration: "1.13"},{file: "A_BotStatus_Lauren_RogerThat.ogg",duration: "0.82"},{file: "A_BotStatus_Lauren_ImOnYourTeam.ogg",duration: "2.34"},{file: "A_BotStatus_Lauren_ImOnYourTeamIdiot.ogg",duration: "1.75"},{file: "A_BotStatus_Lauren_IveGotYourBack.ogg",duration: "1.14"},{file: "A_BotStatus_Lauren_ImOnIt.ogg",duration: "0.88"},{file: "A_BotStatus_Lauren_Midfield.ogg",duration: "0.93"},{file: "A_BotStatus_Lauren_ImInPosition.ogg",duration: "1.10"},{file: "A_BotStatus_Lauren_Sniper.ogg",duration: "1.09"},{file: "A_BotStatus_Lauren_SombodyGetOurFlagBack.ogg",duration: "1.72"},{file: "A_BotStatus_Lauren_YourTeam.ogg",duration: "1.18"},{file: "A_BotStatus_Lauren_SameTeam.ogg",duration: "1.16"},{file: "A_BotStatus_Lauren_UnderHeavyAttack.ogg",duration: "1.57"},{file: "A_BotStatus_Lauren_WestAirNodeCaptured.ogg",duration: "1.93"},{file: "A_Taunt_Lauren_AndStayDown.ogg",duration: "1.76"},{file: "A_Taunt_Lauren_AreYouEvenTrying.ogg",duration: "1.69"},{file: "A_Taunt_Lauren_ANewLow.ogg",duration: "1.38"},{file: "A_Taunt_Lauren_AreYouKiddingMe.ogg",duration: "1.35"},{file: "A_Taunt_Lauren_BottomFeeder.ogg",duration: "1.42"},{file: "A_Taunt_Lauren_Biohazard.ogg",duration: "2.26"},{file: "A_Taunt_Lauren_DeathWarrantEnforced.ogg",duration: "2.37"},{file: "A_Taunt_Lauren_DuckFasterNextTime.ogg",duration: "2.08"},{file: "A_Taunt_Lauren_FlakAttack.ogg",duration: "1.46"},{file: "A_Taunt_Lauren_GoodJobKeepItUp.ogg",duration: "2.50"},{file: "A_Taunt_Lauren_HellYeah.ogg",duration: "1.28"},{file: "A_Taunt_Lauren_GreenIsDefinitelyYourColor.ogg",duration: "2.40"},{file: "A_Taunt_Lauren_HoldStillDamnit.ogg",duration: "1.90"},{file: "A_Taunt_Lauren_ICantFeelMyLegs.ogg",duration: "1.82"},{file: "A_Taunt_Lauren_ImDown.ogg",duration: "1.39"},{file: "A_Taunt_Lauren_IllRememberThat.ogg",duration: "1.38"},{file: "A_Taunt_Lauren_Impressive.ogg",duration: "1.21"},{file: "A_Taunt_Lauren_IronGuard.ogg",duration: "1.22"},{file: "A_Taunt_Lauren_ImHit.ogg",duration: "1.11"},{file: "A_Taunt_Lauren_ImSorryDidIBreakYourConcentration.ogg",duration: "3.20"},{file: "A_Taunt_Lauren_IThinkIveMadeMyPoint.ogg",duration: "2.42"},{file: "A_Taunt_Lauren_JustHoldStillAndIllMakeItQuick.ogg",duration: "2.28"},{file: "A_Taunt_Lauren_Medic.ogg",duration: "1.15"},{file: "A_Taunt_Lauren_Next.ogg",duration: "1.05"},{file: "A_Taunt_Lauren_NailedTheFlagCarrier.ogg",duration: "1.83"},{file: "A_Taunt_Lauren_OhSmack.ogg",duration: "1.81"},{file: "A_Taunt_Lauren_OhSmack2.ogg",duration: "2.18"},{file: "A_Taunt_Lauren_OhYeah.ogg",duration: "1.34"},{file: "A_Taunt_Lauren_OneShotOneKill.ogg",duration: "2.31"},{file: "A_Taunt_Lauren_TargetEliminated.ogg",duration: "2.07"},{file: "A_Taunt_Lauren_Shocking.ogg",duration: "0.98"},{file: "A_Taunt_Lauren_StillNotAsGoodAsMe.ogg",duration: "1.71"},{file: "A_Taunt_Lauren_Sick.ogg",duration: "1.12"},{file: "A_Taunt_Lauren_ThatWasMessy.ogg",duration: "3.11"},{file: "A_Taunt_Lauren_TryTurningTheSafetyOff.ogg",duration: "2.32"},{file: "A_Taunt_Lauren_WhatAMess.ogg",duration: "2.43"},{file: "A_Taunt_Lauren_TryThatAgain.ogg",duration: "1.54"},{file: "A_Taunt_Lauren_YouCantHandleARealWoman.ogg",duration: "2.65"},{file: "A_Taunt_Lauren_YouBleedBetterThanYouShoot.ogg",duration: "2.29"},{file: "A_Taunt_Lauren_YouThinkYouhaveWhatItTakes.ogg",duration: "1.94"},];


const akashaFiles = [{file: "A_Banter_Akasha_FoolYouStillServeTheIzanagi.ogg",duration: "2.98"},{file: "A_BotStatus_NecrisFemale_Acknowledged.ogg",duration: "0.87"},{file: "A_BotStatus_NecrisFemale_AllClear.ogg",duration: "0.87"},{file: "A_BotStatus_NecrisFemale_AreaSecure.ogg",duration: "1.11"},{file: "A_BotStatus_NecrisFemale_EnemyFlagCarrier.ogg",duration: "1.33"},{file: "A_Banter_Akasha_IAmHighInquisitorYouWillObey.ogg",duration: "3.97"},{file: "A_Banter_Akasha_NowIAmUnstoppable.ogg",duration: "2.46"},{file: "A_Banter_Akasha_ThereIsNoHonorForYouHere.ogg",duration: "2.43"},{file: "A_Banter_Akasha_WhoToldYouIWasHere.ogg",duration: "1.40"},{file: "A_Banter_Akasha_TakeNoPrideInVictorySoonIWillBeInvincible.ogg",duration: "4.01"},{file: "A_Banter_Akasha_WhatFoolsToFollowMeHere.ogg",duration: "2.71"},{file: "A_Banter_Akasha_YouveComeSoFarJustToDieAlone.ogg",duration: "4.12"},{file: "A_Banter_Akasha_YouDieQuicklyLikeYourFamily.ogg",duration: "3.33"},{file: "A_Banter_Akasha_YouWillPayForThisDesecration.ogg",duration: "2.30"},{file: "A_BotStatus_NecrisFemale_EnemyFlagCarrierDown.ogg",duration: "1.60"},{file: "A_BotStatus_NecrisFemale_EnemyFlagCarrierGoingHigh.ogg",duration: "1.87"},{file: "A_BotStatus_NecrisFemale_EnemyFlagCarrierGoingLow.ogg",duration: "1.97"},{file: "A_BotStatus_NecrisFemale_EnemyOrbCarrierDown.ogg",duration: "1.52"},{file: "A_BotStatus_NecrisFemale_EnemyOrbCarrier.ogg",duration: "1.34"},{file: "A_BotStatus_NecrisFemale_IHaveTheFlag.ogg",duration: "1.07"},{file: "A_BotStatus_NecrisFemale_IHaveTheOrb.ogg",duration: "1.03"},{file: "A_BotStatus_NecrisFemale_Incoming.ogg",duration: "0.69"},{file: "A_BotStatus_NecrisFemale_InPosition.ogg",duration: "0.80"},{file: "A_BotStatus_NecrisFemale_IveGotYourBack.ogg",duration: "1.07"},{file: "A_BotStatus_NecrisFemale_IveGotOurFlag.ogg",duration: "1.10"},{file: "A_BotStatus_NecrisFemale_SameTeam.ogg",duration: "1.17"},{file: "A_BotStatus_NecrisFemale_Midfield.ogg",duration: "0.80"},{file: "A_BotStatus_NecrisFemale_Sniper.ogg",duration: "0.73"},{file: "A_Taunt_Akasha_AcceptYourDefeat.ogg",duration: "1.28"},{file: "A_Taunt_Akasha_ColdAsIce.ogg",duration: "1.54"},{file: "A_BotStatus_NecrisFemale_SomebodyGetOurFlagBack.ogg",duration: "1.83"},{file: "A_Taunt_Akasha_DarknessAwaits.ogg",duration: "1.71"},{file: "A_Taunt_Akasha_DeathGivesYouPurpose.ogg",duration: "2.31"},{file: "A_Taunt_Akasha_Denied.ogg",duration: "0.97"},{file: "A_Taunt_Akasha_Gimblets.ogg",duration: "2.40"},{file: "A_Taunt_Akasha_FlyForthAndFindThemSearchEveryPlaceKillEveryone.ogg",duration: "5.88"},{file: "A_Taunt_Akasha_EvenYouCannotStopMe.ogg",duration: "2.48"},{file: "A_Taunt_Akasha_GiveInToThePain.ogg",duration: "1.39"},{file: "A_Taunt_Akasha_HeHasForetoldOurVictory.ogg",duration: "2.06"},{file: "A_Taunt_Akasha_IAmForever.ogg",duration: "1.51"},{file: "A_Taunt_Akasha_IShallBurnTheFleshFromYourSoul.ogg",duration: "3.19"},{file: "A_Taunt_Akasha_ICannotTrulyDie.ogg",duration: "2.27"},{file: "A_Taunt_Akasha_IWillDrainYourLifeAway.ogg",duration: "2.86"},{file: "A_Taunt_Akasha_IWillPunishYou.ogg",duration: "2.55"},{file: "A_Taunt_Akasha_LetTheDarknessEmbraceYou.ogg",duration: "2.27"},{file: "A_Taunt_Akasha_MortalityisYourWeakness.ogg",duration: "2.22"},{file: "A_Taunt_Akasha_NanoblackRebirth.ogg",duration: "1.50"},{file: "A_Taunt_Akasha_MyPatienceForGamesHasWornThin.ogg",duration: "3.21"},{file: "A_Taunt_Akasha_MyVictoryIsInevitable.ogg",duration: "1.94"},{file: "A_Taunt_Akasha_NanoblackSustainMe.ogg",duration: "2.30"},{file: "A_Taunt_Akasha_OurVictoryIsNear.ogg",duration: "2.01"},{file: "A_Taunt_Akasha_NowYouKnowWhatColdFeelsLike.ogg",duration: "3.19"},{file: "A_Taunt_Akasha_PainPurifies.ogg",duration: "1.78"},{file: "A_Taunt_Akasha_Perforation.ogg",duration: "0.86"},{file: "A_Taunt_Akasha_ShardsOfDestiny.ogg",duration: "1.40"},{file: "A_Taunt_Akasha_SoCold.ogg",duration: "1.69"},{file: "A_Taunt_Akasha_TheAssasinsChoice.ogg",duration: "1.46"},{file: "A_Taunt_Akasha_ThrProphetWillsItToBeSo.ogg",duration: "2.16"},{file: "A_Taunt_Akasha_YourGodsHaveAbandonnedYou.ogg",duration: "2.45"},{file: "A_Taunt_Akasha_WeShallCleanseThisPlanet.ogg",duration: "2.36"},{file: "A_Taunt_Akasha_YouCannotDefeatUs.ogg",duration: "1.80"},{file: "A_Taunt_NecrisFemale_BringForthTheRainOfBlood.ogg",duration: "3.35"},{file: "A_Taunt_Akasha_YourSoulIsMine.ogg",duration: "2.49"},{file: "A_Taunt_NecrisFemale_IAmTheDeathBringer.ogg",duration: "2.10"},{file: "A_Taunt_NecrisFemale_IShallBurnTheFleshFromYourSoul.ogg",duration: "3.74"},{file: "A_Taunt_NecrisFemale_Nice.ogg",duration: "0.67"}];

const loqueFiles = [{file: "A_BotStatus_NecrisMale_Acknowledged.ogg",duration: "1.15"},{file: "A_BotStatus_NecrisMale_Sniper.ogg",duration: "0.75"},{file: "A_BotStatus_NecrisMale_UnderHeavyAttack.ogg",duration: "1.30"},{file: "A_BotStatus_NecrisMale_SomebodyGetOurFlagBack.ogg",duration: "2.11"},{file: "A_Taunt_NecrisMale2_AWasteOfGoodSuffering - Copy.ogg",duration: "2.20"},{file: "A_BotStatus_NecrisMale_Affirmative.ogg",duration: "0.97"},{file: "A_Taunt_NecrisMale2_Blood.ogg",duration: "0.61"},{file: "A_Taunt_NecrisMale2_AWasteOfGoodSuffering.ogg",duration: "2.20"},{file: "A_BotStatus_NecrisMale_AreaSecure.ogg",duration: "1.49"},{file: "A_BotStatus_NecrisMale_EnemyFlagCarrier.ogg",duration: "1.81"},{file: "A_BotStatus_NecrisMale_EnemyFlagCarrierDown.ogg",duration: "2.38"},{file: "A_BotStatus_NecrisMale_EnemyFlagCarrierGoingHigh.ogg",duration: "2.49"},{file: "A_Taunt_NecrisMale2_ColdBlooded.ogg",duration: "1.45"},{file: "A_BotStatus_NecrisMale_EnemyFlagCarrierGoingLow.ogg",duration: "2.41"},{file: "A_BotStatus_NecrisMale_EnemyOrbCarrier.ogg",duration: "1.77"},{file: "A_BotStatus_NecrisMale_EnemyFlagCarrierHere.ogg",duration: "2.07"},{file: "A_BotStatus_NecrisMale_FlagInPossession.ogg",duration: "1.59"},{file: "A_BotStatus_NecrisMale_EnemyOrbCarrierDown.ogg",duration: "2.13"},{file: "A_Taunt_NecrisMale2_DeathSetsYouFree.ogg",duration: "1.45"},{file: "A_BotStatus_NecrisMale_IHaveTheOrb.ogg",duration: "1.33"},{file: "A_BotStatus_NecrisMale_IHaveTheFlag.ogg",duration: "1.54"},{file: "A_BotStatus_NecrisMale_Incoming.ogg",duration: "0.95"},{file: "A_Taunt_NecrisMale2_IAmTheDeathBringer.ogg",duration: "2.58"},{file: "A_Taunt_NecrisMale2_EnforcedAssimilation.ogg",duration: "1.57"},{file: "A_Taunt_NecrisMale2_IGiveYouSalvation.ogg",duration: "1.98"},{file: "A_BotStatus_NecrisMale_InPosition.ogg",duration: "1.48"},{file: "A_Taunt_NecrisMale2_IFeelNoPain.ogg",duration: "1.63"},{file: "A_BotStatus_NecrisMale_IveGotYourBack.ogg",duration: "1.36"},{file: "A_BotStatus_NecrisMale_Midfield.ogg",duration: "1.41"},{file: "A_BotStatus_NecrisMale_Nice.ogg",duration: "0.87"},{file: "A_BotStatus_NecrisMale_SameTeam.ogg",duration: "1.60"},{file: "A_Taunt_NecrisMale2_IHunger.ogg",duration: "1.18"},{file: "A_Taunt_NecrisMale2_IShallBurnTheFleshFromYourSoul.ogg",duration: "2.86"},{file: "A_Taunt_NecrisMale2_IsThatYourBest.ogg",duration: "1.79"},{file: "A_Taunt_NecrisMale2_IllBeBackAgainAndAgain.ogg",duration: "4.24"},{file: "A_Taunt_NecrisMale2_IShedTinyBlackTearsForYou.ogg",duration: "3.23"},{file: "A_Taunt_NecrisMale2_KillMeAllYouWant.ogg",duration: "1.41"},{file: "A_Taunt_NecrisMale2_Impossible.ogg",duration: "0.92"},{file: "A_Taunt_NecrisMale2_LetMeShowYouHell.ogg",duration: "2.75"},{file: "A_Taunt_NecrisMale2_LostIsYourSoul.ogg",duration: "2.22"},{file: "A_Taunt_NecrisMale2_Morbid.ogg",duration: "0.82"},{file: "A_Taunt_NecrisMale2_LifeIsWeakness.ogg",duration: "1.91"},{file: "A_Taunt_NecrisMale2_MyBloodIsBlack.ogg",duration: "3.48"},{file: "A_Taunt_NecrisMale2_NiceCorpse.ogg",duration: "1.33"},{file: "A_Taunt_NecrisMale2_PainWillPurifyYou.ogg",duration: "1.88"},{file: "A_Taunt_NecrisMale2_Perforation.ogg",duration: "1.00"},{file: "A_Taunt_NecrisMale2_ShardsOfDestiny.ogg",duration: "1.74"},{file: "A_Taunt_NecrisMale2_TheAssassinsChoice.ogg",duration: "1.80"},{file: "A_Taunt_NecrisMale2_ThisIsNotTheEnd.ogg",duration: "1.31"},{file: "A_Taunt_NecrisMale2_TryThatAgain.ogg",duration: "1.07"},{file: "A_Taunt_NecrisMale2_WelcomeToMyPain.ogg",duration: "2.39"},{file: "A_Taunt_NecrisMale2_YouBoreMe.ogg",duration: "2.10"}];

const krallFiles = [{file: "A_BotStatus_Krall_EnemyFlagCarrier.ogg",duration: "1.76"},{file: "A_BotStatus_Krall_SameTeam.ogg",duration: "1.19"},{file: "A_BotStatus_Krall_Sniper.ogg",duration: "0.88"},{file: "A_BotStatus_Krall_WeCarryFlag.ogg",duration: "1.26"},{file: "A_BotStatus_Krall_WeCarryOrb.ogg",duration: "1.25"},{file: "A_BotStatus_Krall_WeSeeFlag.ogg",duration: "0.97"},{file: "A_Taunt_Scythe_AngryRoar.ogg",duration: "2.47"},{file: "A_BotStatus_Krall_EnemyFlagCarrierDown.ogg",duration: "2.13"},{file: "A_Taunt_Scythe_DieEnemy.ogg",duration: "2.97"},{file: "A_Taunt_Scythe_Bleed.ogg",duration: "2.92"},{file: "A_BotStatus_Krall_EnemyFlagCarrierGoingLow.ogg",duration: "2.53"},{file: "A_BotStatus_Krall_EnemyFlagCarrierHere.ogg",duration: "2.14"},{file: "A_BotStatus_Krall_EnemyOrbCarrier.ogg",duration: "1.80"},{file: "A_BotStatus_Krall_EnemyOrbCarrierDown.ogg",duration: "2.27"},{file: "A_BotStatus_Krall_EnemyFlagCarrierGoingHigh.ogg",duration: "2.36"},{file: "A_BotStatus_Krall_GotIt.ogg",duration: "0.54"},{file: "A_BotStatus_Krall_GotYourBack.ogg",duration: "0.95"},{file: "A_BotStatus_Krall_Incoming.ogg",duration: "0.81"},{file: "A_BotStatus_Krall_InPosition.ogg",duration: "1.02"},{file: "A_BotStatus_Krall_Midfield.ogg",duration: "1.16"},{file: "A_BotStatus_Krall_Nice.ogg",duration: "1.84"},{file: "A_Taunt_Scythe_ForTribe.ogg",duration: "2.60"},{file: "A_Taunt_Scythe_FreshMeat.ogg",duration: "3.62"},{file: "A_Taunt_Scythe_HammerMessy.ogg",duration: "4.44"},{file: "A_Taunt_Scythe_Hatred.ogg",duration: "1.42"},{file: "A_Taunt_Scythe_HunterBecomesPrey.ogg",duration: "2.94"},{file: "A_Taunt_Scythe_ItFearsUs.ogg",duration: "4.31"},{file: "A_Taunt_Scythe_ItHasNoEscape.ogg",duration: "2.59"},{file: "A_Taunt_Scythe_OneShot.ogg",duration: "2.11"},{file: "A_Taunt_Scythe_LaughterDisbelief.ogg",duration: "7.56"},{file: "A_Taunt_Scythe_PraiseOurSkill.ogg",duration: "2.76"},{file: "A_Taunt_Scythe_Punished.ogg",duration: "1.57"},{file: "A_Taunt_Scythe_RocketsGoBoom.ogg",duration: "2.77"},{file: "A_Taunt_Scythe_Shame.ogg",duration: "1.31"},{file: "A_Taunt_Scythe_Slime.ogg",duration: "1.44"},{file: "A_Taunt_Scythe_SmellBurningMeatMakeHungry.ogg",duration: "5.85"},{file: "A_Taunt_Scythe_Useless.ogg",duration: "1.13"},{file: "A_Taunt_Scythe_WeSmellItsFilth.ogg",duration: "2.78"}];

const matrixFiles = [{file: "A_BotStatus_Corrupt_Acknowledged.ogg",duration: "0.93"},{file: "A_BotStatus_Corrupt_IncorrectTarget.ogg",duration: "1.32"},{file: "A_BotStatus_Corrupt_Incoming.ogg",duration: "0.75"},{file: "A_BotStatus_Corrupt_Midfield.ogg",duration: "0.80"},{file: "A_BotStatus_Corrupt_AreaSecure.ogg",duration: "1.09"},{file: "A_BotStatus_Corrupt_CoveringYou.ogg",duration: "0.77"},{file: "A_BotStatus_Corrupt_EnemyFlagCarrier.ogg",duration: "1.51"},{file: "A_BotStatus_Corrupt_Affirmative.ogg",duration: "0.85"},{file: "A_BotStatus_Corrupt_EnemyFlagCarrierDown.ogg",duration: "1.72"},{file: "A_BotStatus_Corrupt_IveGotYourBack.ogg",duration: "1.09"},{file: "A_BotStatus_Corrupt_Nice.ogg",duration: "0.68"},{file: "A_BotStatus_Corrupt_EnemyFlagCarrierGoingHigh.ogg",duration: "2.06"},{file: "A_BotStatus_Corrupt_EnemyFlagCarrierHere.ogg",duration: "1.71"},{file: "A_BotStatus_Corrupt_EnemyFlagCarrierGoingLow.ogg",duration: "2.10"},{file: "A_BotStatus_Corrupt_EnemyOrbCarrier.ogg",duration: "1.44"},{file: "A_BotStatus_Corrupt_EnemyOrbCarrierDown.ogg",duration: "1.78"},{file: "A_BotStatus_Corrupt_FlagInPossession.ogg",duration: "1.32"},{file: "A_BotStatus_Corrupt_GotYourBack.ogg",duration: "0.87"},{file: "A_BotStatus_Corrupt_OrbInPossession.ogg",duration: "1.23"},{file: "A_BotStatus_Corrupt_SameTeam.ogg",duration: "0.95"},{file: "A_BotStatus_Corrupt_SurpressTheSniper.ogg",duration: "1.45"},{file: "A_BotStatus_Corrupt_UnitBeingOverrun.ogg",duration: "1.50"},{file: "A_BotStatus_Corrupt_UnitInPosition.ogg",duration: "1.43"},{file: "A_BotStatus_Corrupt_UnitRequiresBackup.ogg",duration: "1.62"},{file: "A_Taunt_Corrupt_BeginSearchRoutine.ogg",duration: "1.71"},{file: "A_Taunt_Corrupt_AnotherFlawedDesign.ogg",duration: "1.78"},{file: "A_Taunt_Corrupt_AllVectorsProjectedSuccessfully.ogg",duration: "2.30"},{file: "A_Taunt_Corrupt_BlameTheCoders.ogg",duration: "1.41"},{file: "A_Taunt_Corrupt_CleanerBurningMoreEfficient.ogg",duration: "2.24"},{file: "A_Taunt_Corrupt_CollateralDamage.ogg",duration: "1.31"},{file: "A_Taunt_Corrupt_Goo.ogg",duration: "2.66"},{file: "A_Taunt_Corrupt_EndOfLine.ogg",duration: "1.23"},{file: "A_Taunt_Corrupt_EnhancedTargetingSystemsOnline.ogg",duration: "2.65"},{file: "A_Taunt_Corrupt_FlagUnitTerminated.ogg",duration: "1.62"},{file: "A_Taunt_Corrupt_IAmTheAlphaAndOmega.ogg",duration: "2.43"},{file: "A_Taunt_Corrupt_IncrementDeathCount.ogg",duration: "1.46"},{file: "A_Taunt_Corrupt_ISeeTheBlueScreen.ogg",duration: "1.64"},{file: "A_Taunt_Corrupt_IAmUnstoppable.ogg",duration: "1.70"},{file: "A_Taunt_Corrupt_LiandryBringsYouTomorrowToday.ogg",duration: "2.51"},{file: "A_Taunt_Corrupt_Llama.ogg",duration: "0.67"},{file: "A_Taunt_Corrupt_LoggingCrashDump.ogg",duration: "1.41"},{file: "A_Taunt_Corrupt_MaintainDevense.ogg",duration: "2.11"},{file: "A_Taunt_Corrupt_LowestCommonDenominator.ogg",duration: "1.85"},{file: "A_Taunt_Corrupt_ReroutingCriticalSystems.ogg",duration: "1.90"},{file: "A_Taunt_Corrupt_RogueProcessTerminated.ogg",duration: "1.97"},{file: "A_Taunt_Corrupt_TacticsPrevail.ogg",duration: "1.97"},{file: "A_Taunt_Corrupt_SystemFailure.ogg",duration: "1.19"},{file: "A_Taunt_Corrupt_SurvivalOfTheFittest.ogg",duration: "1.67"},{file: "A_Taunt_Corrupt_TheTimeForFleshHasEnded.ogg",duration: "2.24"},{file: "A_Taunt_Corrupt_UnitNeedsRepair.ogg",duration: "1.51"},{file: "A_Taunt_Corrupt_Unreal.ogg",duration: "0.91"},{file: "A_Taunt_Corrupt_YourProgrammingIsInferior.ogg",duration: "2.09"},{file: "A_Taunt_Matrix_IAmHumanityUpgraded.ogg",duration: "2.50"},{file: "A_Taunt_Matrix_AttachingScreenshot.ogg",duration: "1.54"},{file: "A_Taunt_Matrix_AccessingLifeParameters.ogg",duration: "1.70"},{file: "A_Taunt_Matrix_RepressingLifeMemories.ogg",duration: "1.66"},{file: "A_Taunt_Matrix_NextTimeDoBetter.ogg",duration: "2.02"},{file: "A_Taunt_Matrix_SystemHasRecoveredfromSeriousError.ogg",duration: "2.51"},{file: "A_Taunt_Matrix_UpgradeTodayLiveTomorrow.ogg",duration: "2.96"},];



const fart = document.getElementById("fart");



const voicePacks = [
    {"id": 0, "dir": "announcer", "files": announcerFiles},
    {"id": 1, "dir": "reaper", "files": reaperFiles},
    {"id": 2, "dir": "othello", "files": othelloFiles},
    {"id": 3, "dir": "bishop", "files": bishopFiles},
    {"id": 4, "dir": "jester", "files": jesterFiles},
    {"id": 5, "dir": "akasha", "files": akashaFiles},
    {"id": 6, "dir": "loque", "files": loqueFiles},
    {"id": 7, "dir": "krall", "files": krallFiles},
    {"id": 8, "dir": "matrix", "files": matrixFiles},
    {"id": 9, "dir": "lauren", "files": laurenFiles}
];


class NavItem extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        let cssClass = "";

        if(this.props.selected){
            cssClass = "yellow";
        }

        return (
            <div className="n-i">
                {this.props.name}
            </div>
        );
    }
}


/*class Nav extends React.Component{

    constructor(props){

        super(props);
    }

    render(){

        return (
            <header>
                <h1>Unreal Tournament 3 Soundboards</h1>
                <nav>
                    <NavItem name={"Home"} selected={true}/>
                    <NavItem name={"Reaper"} selected={false}/>
                    <NavItem name={"Othello"} selected={false}/>
                    <NavItem name={"Bishop"} selected={false}/>
                    <NavItem name={"Default Male"} selected={false}/>
                </nav>
            </header>
        );
    }
}*/

class SoundButton extends React.Component{

    constructor(props){

        super(props);
        
        this.state = {"displayName": this.props.name, "cssClass": "white", "barWidth": 0, "duration": "0.00", "currentTime": "0.00", "category": "Taunt"};
    
        this.bMounted = false;

        this.loadAudio = this.loadAudio.bind(this);
        this.play = this.play.bind(this);
    }


    loadAudio(){
        
        const audio = new Audio();
        audio.src = "files/"+this.props.dir+"/"+this.props.file;
        this.audio = audio;

        if(this.bMounted == false){
            this.bMounted = true;
        }

       /* this.audio.onloadedmetadata = () =>{
            if(this.bMounted){
              //  console.log(
                   // `{"name": ${this.props.file},"duration": ${this.toFixedTime(this.audio.duration)}}`);
               // fart.innerHTML +=`{file: "${this.props.file}",duration: "${this.toFixedTime(this.audio.duration)}"},`;

                this.setState({"duration": this.toFixedTime(this.audio.duration)});
            }
        }*/

        this.audio.onplaying = () =>{
        //.  console.log("playing");
            if(this.bMounted){
                this.setState({"cssClass": "red"});
            }
        }

        this.audio.onended = () =>{
        //  .. console.log("ended");
            if(this.bMounted){
                this.setState({"cssClass": "white"});
            }
        }

        this.audio.ontimeupdate = () =>{

        //  console.log("updated");
            if(this.bMounted){
                let bit = 100;

                if(this.audio.duration != 0){
                    bit = 100 / this.audio.duration;
                }



            
                this.setState({"barWidth": this.audio.currentTime * bit});
            }
        }
       
    }

    toFixedTime(input){

        return input.toFixed(2);
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){

        if(this.bMounted){
            this.audio.pause();
            delete this.audio;
            this.bMounted = false;
        }
    }

    componentDidMount(){
        
        this.fixName();
       // this.loadAudio();
        
    }

    play(){
        

        if(this.bMounted){
            this.audio.currentTime = 0;
            this.audio.play();
        }else{
            this.loadAudio();
            this.audio.currentTime = 0;
            this.audio.play();
        }

    }

    fixName(){

        const reg = /^.+_(.+)\.ogg$/i;

        const result = reg.exec(this.state.displayName);

        let currentName = this.state.displayName;


        if(result != null){
            //this.setState({"displayName": result[1]});

            currentName = result[1];
        }

        let char = 0;

        let fixedName = "";

        for(let i = 0; i < currentName.length; i++){

            char = currentName[i];

            if(char.toUpperCase() === char){
                fixedName += " "+char;
            }else{
                fixedName += char;
            }
        }

        this.setState({"displayName": fixedName});
    }

    render(){

        return (
            <div className={"s-button " +this.state.cssClass} onMouseDown={this.play}>
                {this.state.displayName}
                <div className="stats">
                    {this.props.duration} Seconds
                </div>
                <div className="progress-bar">
                    <div className="progress-bar-inner" style={{"width": this.state.barWidth+"%"}}></div>
                </div>
            </div>
        );
    }
}


class Board extends React.Component{

    constructor(props){
        super(props);

        console.log("new board");

        this.state = {"pack": 0};
        this.elems = [];

        
    }

    componentDidUpdate(){

       
    }

    render(){

        console.log("render");

       // console.log("new props = "+this.props.pack);
       // console.log("new dir = "+voicePacks[this.props.pack].dir);
        //console.log("new files = "+voicePacks[this.props.pack].files);

        const elems = [];
        let v = 0;

        const dir = this.props.dir;

        for(let i = 0; i < this.props.files.length; i++){

            v = this.props.files[i];

           // console.log(v);

            elems.push(<SoundButton key={i} duration={v.duration} dir={dir} name={v.file} file={v.file}/>);
        }

        //console.log("elems.length = "+elems.length+" it should be "+voicePacks[this.props.pack].files.length);

        return (
            <div className="board">
   
                {elems}
            </div>
        );
    }
}


class App extends React.Component{

    constructor(props){

        super(props);

        this.changeVoice = this.changeVoice.bind(this);
        this.state = {"selectedPack": 0, "loadedImages": 0, "bLoadedImages": false};

        this.filesToLoad = [
            "bg.jpg",
            "headerbg.jpg",
            "headerbgalt.jpg",
            "akasha.png",
            "announcer.png",
            "bishop.png",
            "headerbgalt.png",
            "jester.png",
            "krall.png",
            "lauren.png",
            "loque.png",
            "matrix.png",
            "othello.png",
            "reaper.png",
            "test.png",
            "test2.png",
            "test3.png"
        ];
    }

    componentDidMount(){

        this.preloadImages();
    }

    changeVoice(newVoice){
       
        console.log("Change voice to "+newVoice);
        if(this.state.selectedPack !== newVoice){
            this.setState({"selectedPack": newVoice});
        }
    }

    preloadImages(){

        const images = [];

        let current = "";


        for(let i = 0; i < this.filesToLoad.length; i++){

            current = new Image();
            current.src = "files/"+this.filesToLoad[i];
            images.push(current);

            images[images.length - 1].addEventListener("load", () =>{

                console.log("Loaded image");

                this.setState({"loadedImages": this.state.loadedImages + 1});

                const bit = 100 / this.filesToLoad.length;

                let currentBarWidth = 100;
                    
                currentBarWidth = bit * this.state.loadedImages;        

                document.getElementById("loading-bar-inner").style.cssText="width:"+currentBarWidth+"%;";
                document.getElementById("loading-percent").innerHTML = currentBarWidth.toFixed(2)+"%";

                document.getElementById("loading-info").innerHTML +=" Loaded "+ this.filesToLoad[this.state.loadedImages - 1]+"</br>";

                if(this.state.loadedImages >= this.filesToLoad.length){
                    this.setState({"bLoadedImages": true});
                    document.getElementById("background").style.cssText="display:block;background-image:url(files/bg.jpg)";
                    document.getElementById("root").style.cssText="background-color:rgba(0,0,0,0);background-image:url(files/headerbgalt.png)";

                }
            });
            
            

        }
    }

    getIconClass(id){

        if(id !== this.state.selectedPack){
            return "n-i";
        }

        return "n-i-selected"
    }

    renderDefault(){

        return (
            <div id="content">
                <header>
                <img id="main-logo" src="files/test.png" alt="image"/>
                <h1>Soundboards</h1>
                    <nav>
                    <div className={this.getIconClass(0)} onMouseDown={() => this.changeVoice(0)}>
                        Announcer<br/>
                        <img src="files/announcer.png" alt="img"/>
                    </div>
                    <div className={this.getIconClass(1)} onMouseDown={() => this.changeVoice(1)}>
                        Reaper<br/>
                        <img src="files/reaper.png" alt="img"/>
                    </div>
                    <div className={this.getIconClass(2)} onMouseDown={() => this.changeVoice(2)}>
                        Othello<br/>
                        <img src="files/othello.png" alt="img"/>
                    </div>
                    <div className={this.getIconClass(3)} onMouseDown={() => this.changeVoice(3)}>
                        Bishop<br/>
                        <img src="files/bishop.png" alt="img"/>
                    </div>
                    <div className={this.getIconClass(4)} onMouseDown={() => this.changeVoice(4)}>
                        Jester<br/>
                        <img src="files/jester.png" alt="img"/>
                    </div>
                    <div className={this.getIconClass(9)} onMouseDown={() => this.changeVoice(9)}>
                        Lauren<br/>
                        <img src="files/lauren.png" alt="img"/>
                    </div>
                    <div className={this.getIconClass(5)} onMouseDown={() => this.changeVoice(5)}>
                        Akasha<br/>
                        <img src="files/akasha.png" alt="img"/>
                    </div>
                    <div className={this.getIconClass(6)} onMouseDown={() => this.changeVoice(6)}>
                        Loque<br/>
                        <img src="files/loque.png" alt="img"/>
                    </div>
                    <div className={this.getIconClass(7)} onMouseDown={() => this.changeVoice(7)}>
                        Krall<br/>
                        <img src="files/krall.png" alt="img"/>
                    </div>
                    <div className={this.getIconClass(8)} onMouseDown={() => this.changeVoice(8)}>
                        Matrix<br/>
                        <img src="files/matrix.png" alt="img"/>
                    </div>
                    
                    </nav>
                </header>

                {this.state.selectedPack == 0 &&  <Board files={voicePacks[0].files} dir={voicePacks[0].dir}/> }
                {this.state.selectedPack == 1 &&  <Board files={voicePacks[1].files} dir={voicePacks[1].dir}/> }
                {this.state.selectedPack == 2 &&  <Board files={voicePacks[2].files} dir={voicePacks[2].dir}/> }
                {this.state.selectedPack == 3 &&  <Board files={voicePacks[3].files} dir={voicePacks[3].dir}/> }
                {this.state.selectedPack == 4 &&  <Board files={voicePacks[4].files} dir={voicePacks[4].dir}/> }
                {this.state.selectedPack == 5 &&  <Board files={voicePacks[5].files} dir={voicePacks[5].dir}/> }
                {this.state.selectedPack == 6 &&  <Board files={voicePacks[6].files} dir={voicePacks[6].dir}/> }
                {this.state.selectedPack == 7 &&  <Board files={voicePacks[7].files} dir={voicePacks[7].dir}/> }
                {this.state.selectedPack == 8 &&  <Board files={voicePacks[8].files} dir={voicePacks[8].dir}/> }
                {this.state.selectedPack == 9 &&  <Board files={voicePacks[9].files} dir={voicePacks[9].dir}/> }
               
                <footer>
                    Sounds &copy; <a href="https://www.epicgames.com/">Epic Games</a> 1998-2007<br/>
                    <a href="https://store.steampowered.com/app/13210/Unreal_Tournament_3_Black/">Buy Unreal Tournament 3</a><br/>
                    Carbon Fiber Texture <a href="http://www.freepik.com">Designed by Dotstudio / Freepik</a><br/>        
                    Soundboard by <a href="https://github.com/scottadkin">Scott Adkin</a> &copy; 2020
                </footer>
            </div>
        );

    }

    //{this.state.bLoadedImages  && this.renderDefault() }
    render(){

        return (

            <div>

            {this.state.bLoadedImages && this.renderDefault() }
            {!this.state.bLoadedImages  && <LoadingScreen /> }

            </div>
        );
        
    }

}


class LoadingScreen extends React.Component{

    constructor(props){

        super(props);
    }

    render(){
        return (
            <div id="loading">
            Loading Assets,<br/> Please Wait.
            <div id="loading-bar">
                <div id="loading-bar-inner"></div>
            </div>
            <div id="loading-percent">
                0&#37;
            </div>
            <div id="loading-info" />
            </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
);

/*ReactDOM.render(
    <LoadingScreen />,
    document.getElementById("loading")
);*/