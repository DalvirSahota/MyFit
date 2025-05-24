import type { SplitExerciseTemplateWithoutIdsOrIndex
} from '$lib/components/mesocycleAndExerciseSplit/commonTypes';
import type { MuscleGroup
} from '@prisma/client';

// TODO: #82
export const commonExercisePerMuscleGroup: {
	muscleGroup: MuscleGroup;
	exercises: SplitExerciseTemplateWithoutIdsOrIndex[];
}[] = [
	{
		"muscleGroup": "Chest",
		"exercises": [
			{
				"name": "Barbell bench press",
				"targetMuscleGroup": "Chest",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Down",
				"repRangeStart": 5,
				"repRangeEnd": 10,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Feet flat, back arched, grip just outside shoulders. Lower bar to mid-chest, press up explosively. [Video](https://www.youtube.com/watch?v=NsEbXsTwas8)"
			},
			{
				"name": "Incline dumbbell press",
				"targetMuscleGroup": "Chest",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Bench at 30-45°, elbows tucked. Press dumbbells up, control descent. [Video](https://www.youtube.com/watch?v=7qFp5khuoFA)"
			},
			{
				"name": "Machine chest flyes",
				"targetMuscleGroup": "Chest",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 15,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Sit upright, slight elbow bend. Squeeze handles together, slow return. [Video](https://www.youtube.com/watch?v=fGm-ef-4PVk)"
			},
			{
				"name": "Push-ups",
				"targetMuscleGroup": "Chest",
				"customMuscleGroup": null,
				"bodyweightFraction": 0.64,
				"setType": "Straight",
				"repRangeStart": 5,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Hands under shoulders, core tight. Lower chest to floor, push back up. [Video](https://bing.com/search?q=Jeff+Nippard+RP+Fitness+chest+exercise+videos)"
			},
			{
				"name": "Incline barbell bench press",
				"targetMuscleGroup": "Chest",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 6,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Bench at 30°, grip outside shoulders. Lower bar to upper chest, press up. [Video](https://www.youtube.com/watch?v=NsEbXsTwas8)"
			},
			{
				"name": "Dips",
				"targetMuscleGroup": "Chest",
				"customMuscleGroup": null,
				"bodyweightFraction": 0.75,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Lean forward, elbows at 45°. Lower body, push up powerfully. [Video](https://barbend.com/jeff-nippard-ranks-chest-exercises-for-hypertrophy/)"
			},
			{
				"name": "Flat dumbbell bench press",
				"targetMuscleGroup": "Chest",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Feet flat, back arched, elbows tucked. Press dumbbells up, lower slowly. [Video](https://jeffnippard.com/blogs/news/the-ultimate-push-workout-for-muscle-growth-chest-shoulders-triceps-2023)"
			},
			{
				"name": "Dumbbell chest flyes",
				"targetMuscleGroup": "Chest",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Elbows soft, arms open wide. Squeeze chest at top. [Video](https://www.youtube.com/watch?v=NsEbXsTwas8&t=0s)"
			},
			{
				"name": "Incline dumbbell chest flyes",
				"targetMuscleGroup": "Chest",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Bench at 30°, arms open wide. Stretch at bottom, squeeze at top. [Video](https://www.youtube.com/watch?v=NsEbXsTwas8&t=59s)"
			}
		]
	},
	{
		"muscleGroup": "FrontDelts",
		"exercises": [
			{
				"name": "Machine shoulder press",
				"targetMuscleGroup": "FrontDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Sit upright, grip handles firmly. Press up, control back down. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
			},
			{
				"name": "EZ-bar front raise",
				"targetMuscleGroup": "FrontDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Hold bar shoulder-width, lift to eye level. Lower slowly. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
			},
			{
				"name": "Dumbbell shoulder press",
				"targetMuscleGroup": "FrontDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Sit upright, elbows at 90°. Press dumbbells overhead, control descent. [Video](https://www.youtube.com/watch?v=SgyUoY0IZ7A)"
			},
			{
				"name": "Seated dumbbell shoulder press",
				"targetMuscleGroup": "FrontDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Back straight, dumbbells at shoulder height. Press overhead, control return. [Video](https://www.youtube.com/watch?v=SgyUoY0IZ7A)"
			},
			{
				"name": "Dumbbell front raise",
				"targetMuscleGroup": "FrontDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Hold dumbbells in front, raise to eye level. Lower under control. [Video](https://www.youtube.com/watch?v=SgyUoY0IZ7A)"
			},
			{
				"name": "Cable front raise",
				"targetMuscleGroup": "FrontDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Set cable low, grip handle. Raise to forehead, control return. [Video](https://www.youtube.com/watch?v=SgyUoY0IZ7A)"
			}
		]
	},
	{
		"muscleGroup": "SideDelts",
		"exercises": [
			{
				"name": "Leaning dumbbell lateral raises",
				"targetMuscleGroup": "SideDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Lean slightly, raise dumbbells to shoulder height. Control descent. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
			},
			{
				"name": "Behind the back cable lateral raises",
				"targetMuscleGroup": "SideDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Stand sideways, pull cable upward to shoulder height. Control return. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
			},
			{
				"name": "Super ROM lateral raises",
				"targetMuscleGroup": "SideDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Start low, raise dumbbells high for max range. Control slow descent. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
			},
			{
				"name": "Cross-body cable lateral raises",
				"targetMuscleGroup": "SideDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Grip low, pull cable diagonally outward to shoulder level. Slow return. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
			},
			{
				"name": "Dumbbell lateral raises",
				"targetMuscleGroup": "SideDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Stand tall, raise dumbbells sideways until shoulders level. Lower slowly. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
			},
			{
				"name": "Cable Y-raises",
				"targetMuscleGroup": "SideDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Hold cable, raise arms in Y-shape above shoulders. Slow return. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
			}
		]
	},
	{
		"muscleGroup": "RearDelts",
		"exercises": [
			{
				"name": "Face pull",
				"targetMuscleGroup": "RearDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Set rope at face height, pull toward forehead, elbows high. [Video](https://www.youtube.com/watch?v=qfc70k40318)"
			},
			{
				"name": "Machine rear delt fly",
				"targetMuscleGroup": "RearDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Chest against pad, arms straight. Open wide, squeeze rear delts. [Video](https://www.youtube.com/watch?v=P5CXx_jgTDE)"
			},
			{
				"name": "Bent-over reverse dumbbell fly",
				"targetMuscleGroup": "RearDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Hinge forward, raise dumbbells outward, control descent. [Video](https://www.youtube.com/watch?v=qfc70k40318)"
			},
			{
				"name": "Reverse pec deck",
				"targetMuscleGroup": "RearDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Grip handles, open arms back, squeeze rear delts. [Video](https://www.youtube.com/watch?v=qfc70k40318)"
			},
			{
				"name": "Cable rear delt fly",
				"targetMuscleGroup": "RearDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Set cable at shoulder height, pull outward, slow return. [Video](https://www.youtube.com/watch?v=P5CXx_jgTDE)"
			},
			{
				"name": "Single-arm rear delt cable fly",
				"targetMuscleGroup": "RearDelts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Grab low cable, pull across body, control return. [Video](https://www.youtube.com/watch?v=P5CXx_jgTDE)"
			}
		]
	},
	{
		"muscleGroup": "Lats",
		"exercises": [
			{
				"name": "Pull-ups",
				"targetMuscleGroup": "Lats",
				"customMuscleGroup": null,
				"bodyweightFraction": 1,
				"setType": "Straight",
				"repRangeStart": 6,
				"repRangeEnd": 12,
				"changeType": null,
				"changeAmount": null,
				"note": "Hang from bar, pull chest up to bar, lower under control. [Video](https://www.youtube.com/watch?v=12xHxUnBEiI)"
			},
			{
				"name": "Lat pulldown (wide grip)",
				"targetMuscleGroup": "Lats",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Grip bar wide, pull to chest, squeeze lats, control return. [Video](https://www.youtube.com/watch?v=12xHxUnBEiI)"
			},
			{
				"name": "Reverse grip lat pulldown",
				"targetMuscleGroup": "Lats",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Grip bar underhand, pull down to upper chest, control return. [Video](https://www.youtube.com/watch?v=12xHxUnBEiI)"
			},
			{
				"name": "Cable lat pullover",
				"targetMuscleGroup": "Lats",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Grip rope, pull down in arc motion, keep arms straight. [Video](https://www.youtube.com/watch?v=12xHxUnBEiI)"
			},
			{
				"name": "Dumbbell single-arm row",
				"targetMuscleGroup": "Lats",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Hand on bench, pull dumbbell to waist, control descent. [Video](https://www.youtube.com/watch?v=axoeDmW0oAY)"
			},
			{
				"name": "Bent-over barbell row",
				"targetMuscleGroup": "Lats",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 6,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Hinge forward, pull barbell to waist, slow return. [Video](https://www.youtube.com/watch?v=axoeDmW0oAY)"
			},
			{
				"name": "Seated cable row",
				"targetMuscleGroup": "Lats",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Sit tall, pull handle to waist, squeeze lats, control return. [Video](https://www.youtube.com/watch?v=12xHxUnBEiI)"
			}
		]
	},
	{
		"muscleGroup": "Traps",
		"exercises": [
			{
				"name": "Barbell shrugs",
				"targetMuscleGroup": "Traps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Grip bar shoulder-width, shrug up, hold briefly, lower slow. [Video](https://www.youtube.com/watch?v=C6sYjDFuq9I)"
			},
			{
				"name": "Trap bar shrugs",
				"targetMuscleGroup": "Traps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Stand tall, grip trap bar, shrug up, hold briefly, slow return. [Video](https://www.youtube.com/watch?v=C6sYjDFuq9I)"
			},
			{
				"name": "Dumbbell shrugs",
				"targetMuscleGroup": "Traps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Hold dumbbells at sides, shrug up, squeeze, control return. [Video](https://www.youtube.com/watch?v=C6sYjDFuq9I)"
			},
			{
				"name": "Smith machine shrugs",
				"targetMuscleGroup": "Traps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Grip bar, shrug up, hold briefly, lower slow. [Video](https://www.youtube.com/watch?v=C6sYjDFuq9I)"
			},
			{
				"name": "Dual cable shrugs",
				"targetMuscleGroup": "Traps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Grab cables, shrug straight up, squeeze traps, slow return. [Video](https://www.youtube.com/watch?v=C6sYjDFuq9I)"
			}
		]
	},
	{
		"muscleGroup": "Triceps",
		"exercises": [
			{
				"name": "Cable triceps pressdown (rope)",
				"targetMuscleGroup": "Triceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Grip rope, pull down, spread handles, slow return. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=60s)"
			},
			{
				"name": "Overhead cable triceps extension",
				"targetMuscleGroup": "Triceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Grip rope overhead, extend arms straight, slow return. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=193s)"
			},
			{
				"name": "Katana cable triceps extension",
				"targetMuscleGroup": "Triceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Grip cable across body, extend outward, slow return. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=293s)"
			},
			{
				"name": "Dumbbell French press",
				"targetMuscleGroup": "Triceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Hold dumbbell behind head, extend arms straight, control down. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=346s)"
			},
			{
				"name": "One-arm dumbbell triceps extension",
				"targetMuscleGroup": "Triceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Hold dumbbell overhead, extend arm straight, slow return. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=391s)"
			},
			{
				"name": "Skull crushers",
				"targetMuscleGroup": "Triceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Lie flat, lower bar to forehead, extend arms straight. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=471s)"
			},
			{
				"name": "JM press",
				"targetMuscleGroup": "Triceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Lower bar toward neck, extend elbows, control back down. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=538s)"
			},
			{
				"name": "Triceps kickbacks (cable)",
				"targetMuscleGroup": "Triceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Bend forward, extend arm straight back, control return. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=592s)"
			},
			{
				"name": "Lying skull crushers",
				"targetMuscleGroup": "Triceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Lie down, lower bar to forehead, extend arms straight. [Video](https://www.youtube.com/watch?v=4re6CJ0XNF8)"
			}
		]
	},
	{
		"muscleGroup": "Biceps",
		"exercises": [
			{
				"name": "Dumbbell bicep curls",
				"targetMuscleGroup": "Biceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Hold dumbbells at sides, curl up, squeeze biceps, lower slow. [Video](https://www.youtube.com/watch?v=i1YgFZB6alI&t=420s)"
			},
			{
				"name": "Dumbbell hammer curls",
				"targetMuscleGroup": "Biceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Palms neutral, curl dumbbells up, squeeze, control return. [Video](https://www.youtube.com/watch?v=_GziHDdJY10)"
			},
			{
				"name": "Concentration curls",
				"targetMuscleGroup": "Biceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Elbow on thigh, curl dumbbell up, slow return. [Video](https://www.youtube.com/watch?v=i1YgFZB6alI&t=510s)"
			},
			{
				"name": "Preacher curls",
				"targetMuscleGroup": "Biceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Down",
				"repRangeStart": 10,
				"repRangeEnd": 20,
				"changeType": "AbsoluteLoad",
				"changeAmount": 2.5,
				"note": "Elbows on pad, curl bar up, control down. [Video](https://www.youtube.com/watch?v=j5f_0rNkPwU)"
			},
			{
				"name": "Lying dumbbell curls",
				"targetMuscleGroup": "Biceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Lie flat, curl dumbbells, stretch fully at bottom. [Video](https://www.youtube.com/watch?v=HsV4wDUxdow&t=996s)"
			},
			{
				"name": "EZ bar curls",
				"targetMuscleGroup": "Biceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 6,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Grip bar narrow, curl up, squeeze biceps, control return. [Video](https://www.youtube.com/watch?v=_GziHDdJY10)"
			},
			{
				"name": "Bayesian cable curls",
				"targetMuscleGroup": "Biceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Step forward, curl cable to shoulder, slow return. [Video](https://www.youtube.com/watch?v=j5f_0rNkPwU)"
			},
			{
				"name": "Incline dumbbell curls",
				"targetMuscleGroup": "Biceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Sit at incline, curl dumbbells, squeeze biceps at top. [Video](https://www.youtube.com/watch?v=j5f_0rNkPwU)"
			}
		]
	},
	{
		"muscleGroup": "Forearms",
		"exercises": [
			{
				"name": "Reverse grip curls",
				"targetMuscleGroup": "Forearms",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Grip bar palms down, curl to shoulders, lower slowly. [Video](https://www.youtube.com/watch?v=MfMxT_jXcPE&t=74s)"
			},
			{
				"name": "Wrist roller",
				"targetMuscleGroup": "Forearms",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Roll weight up and down using forearm flexion and extension. [Video](https://www.youtube.com/watch?v=MfMxT_jXcPE&t=159s)"
			},
			{
				"name": "Dumbbell wrist curls",
				"targetMuscleGroup": "Forearms",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Rest forearm on bench, curl dumbbell upward, control return. [Video](https://www.youtube.com/watch?v=MfMxT_jXcPE&t=353s)"
			},
			{
				"name": "Dumbbell wrist extensions",
				"targetMuscleGroup": "Forearms",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Palm facing down, extend wrist upward, slow return. [Video](https://www.youtube.com/watch?v=MfMxT_jXcPE&t=353s)"
			}
		]
	},
	{
		"muscleGroup": "Quads",
		"exercises": [
			{
				"name": "Barbell squats",
				"targetMuscleGroup": "Quads",
				"customMuscleGroup": null,
				"bodyweightFraction": 1,
				"setType": "Down",
				"repRangeStart": 5,
				"repRangeEnd": 10,
				"changeType": "AbsoluteLoad",
				"changeAmount": 10,
				"note": "Feet shoulder-width, squat deep, drive up strong. [Video](https://www.youtube.com/watch?v=i2ARp-lzies)"
			},
			{
				"name": "Leg press",
				"targetMuscleGroup": "Quads",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Feet high for quad focus, push up, control return. [Video](https://www.youtube.com/watch?v=i2ARp-lzies)"
			},
			{
				"name": "Lunges",
				"targetMuscleGroup": "Quads",
				"customMuscleGroup": null,
				"bodyweightFraction": 0.85,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Step forward, bend knee, push back explosively. [Video](https://www.youtube.com/watch?v=i2ARp-lzies)"
			},
			{
				"name": "Leg extensions",
				"targetMuscleGroup": "Quads",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Lift legs fully, squeeze quads, slow return. [Video](https://www.youtube.com/watch?v=i2ARp-lzies)"
			},
			{
				"name": "Dumbbell Bulgarian split squats",
				"targetMuscleGroup": "Quads",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Rear foot elevated, squat deep, drive up strong. [Video](https://www.youtube.com/watch?v=-C5U1mzoocY&t=481s)"
			},
			{
				"name": "Dumbbell goblet squats",
				"targetMuscleGroup": "Quads",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Hold dumbbell close, squat deep, push up. [Video](https://www.youtube.com/watch?v=-C5U1mzoocY&t=481s)"
			},
			{
				"name": "Dumbbell step-ups",
				"targetMuscleGroup": "Quads",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Step onto box, push through quad, control down. [Video](https://www.youtube.com/watch?v=-C5U1mzoocY&t=481s)"
			}
		]
	},
	{
		"muscleGroup": "Hamstrings",
		"exercises": [
			{
				"name": "Romanian deadlifts",
				"targetMuscleGroup": "Hamstrings",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Hinge at hips, lower bar to mid-shin, keep legs straight. [Video](https://www.youtube.com/watch?v=0a_fVS2s4Ho)"
			},
			{
				"name": "Seated leg curls",
				"targetMuscleGroup": "Hamstrings",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Sit upright, curl legs down, squeeze hamstrings, slow return. [Video](https://www.youtube.com/watch?v=Lh3iMIcbkBQ)"
			},
			{
				"name": "Lying leg curls",
				"targetMuscleGroup": "Hamstrings",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Lie face down, curl legs up, control return. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
			},
			{
				"name": "Nordic hamstring curls",
				"targetMuscleGroup": "Hamstrings",
				"customMuscleGroup": null,
				"bodyweightFraction": 1,
				"setType": "Straight",
				"repRangeStart": 6,
				"repRangeEnd": 12,
				"changeType": null,
				"changeAmount": null,
				"note": "Anchor feet, lower slowly, push up explosively. [Video](https://www.youtube.com/watch?v=0a_fVS2s4Ho)"
			},
			{
				"name": "Glute-ham raises",
				"targetMuscleGroup": "Hamstrings",
				"customMuscleGroup": null,
				"bodyweightFraction": 1,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Bend at knees, lower torso, curl back up. [Video](https://www.youtube.com/watch?v=0a_fVS2s4Ho)"
			},
			{
				"name": "Cable hamstring curls",
				"targetMuscleGroup": "Hamstrings",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Set cable low, curl leg up, slow return. [Video](https://www.youtube.com/watch?v=0a_fVS2s4Ho)"
			},
			{
				"name": "Dumbbell Romanian deadlifts",
				"targetMuscleGroup": "Hamstrings",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Hold dumbbells, hinge at hips, lower to mid-shin, control up. [Video](https://www.youtube.com/watch?v=0a_fVS2s4Ho)"
			}
		]
	},
	{
		"muscleGroup": "Glutes",
		"exercises": [
			{
				"name": "Barbell hip thrust",
				"targetMuscleGroup": "Glutes",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Shoulders on bench, thrust hips up, squeeze glutes, control return. [Video](https://www.youtube.com/watch?v=3ryh7PNhz3E)"
			},
			{
				"name": "Glute bridge",
				"targetMuscleGroup": "Glutes",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Lie flat, push hips up, contract glutes, slow return. [Video](https://www.youtube.com/watch?v=XgekALiC8Ik)"
			},
			{
				"name": "Bulgarian split squat",
				"targetMuscleGroup": "Glutes",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Rear foot on bench, squat deep, push up strong. [Video](https://barbend.com/6-exercises-jeff-nippard-scientific-lower-body-workout/)"
			},
			{
				"name": "Cable glute kickback",
				"targetMuscleGroup": "Glutes",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Attach ankle strap, kick leg back, contract glutes, slow return. [Video](https://www.youtube.com/watch?v=dJa_Nf4zdik)"
			},
			{
				"name": "Dumbbell step-ups",
				"targetMuscleGroup": "Glutes",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Step onto box, push through glutes, control down. [Video](https://www.youtube.com/watch?v=BhUpWmlKcJ8)"
			},
			{
				"name": "Sumo deadlift",
				"targetMuscleGroup": "Glutes",
				"customMuscleGroup": null,
				"bodyweightFraction": 1,
				"setType": "Straight",
				"repRangeStart": 5,
				"repRangeEnd": 10,
				"changeType": "AbsoluteLoad",
				"changeAmount": 10,
				"note": "Feet wide, grip bar, drive hips forward, lockout strong. [Video](https://fitnessvolt.com/jeff-nippard-rates-glute-exercises/)"
			},
			{
				"name": "Machine hip thrust",
				"targetMuscleGroup": "Glutes",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Push hips into pad, contract glutes, control return. [Video](https://www.youtube.com/watch?v=3ryh7PNhz3E)"
			},
			{
				"name": "Walking lunges",
				"targetMuscleGroup": "Glutes",
				"customMuscleGroup": null,
				"bodyweightFraction": 0.85,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Step forward, lower knee, push through glutes. [Video](https://www.youtube.com/watch?v=BhUpWmlKcJ8)"
			}
		]
	},
	{
		"muscleGroup": "Calves",
		"exercises": [
			{
				"name": "Standing calf raises",
				"targetMuscleGroup": "Calves",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Stand tall, raise heels, squeeze calves, control down. [Video](https://www.youtube.com/watch?v=-qsRtp_PbVM&t=224s)"
			},
			{
				"name": "Seated calf raises",
				"targetMuscleGroup": "Calves",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Sit upright, push toes down, contract soleus, control return. [Video](https://www.youtube.com/watch?v=21inrjhoFkQ&t=531s)"
			},
			{
				"name": "Dumbbell standing calf raises",
				"targetMuscleGroup": "Calves",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Hold dumbbells, raise heels, squeeze calves, control down. [Video](https://www.youtube.com/watch?v=-qsRtp_PbVM&t=224s)"
			},
			{
				"name": "Dumbbell seated calf raises",
				"targetMuscleGroup": "Calves",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Place dumbbells on knees, raise heels, slow return. [Video](https://www.youtube.com/watch?v=21inrjhoFkQ&t=531s)"
			},
			{
				"name": "Donkey calf raises",
				"targetMuscleGroup": "Calves",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Lean forward, raise heels, stretch calves, control down. [Video](https://www.youtube.com/watch?v=21inrjhoFkQ&t=327s)"
			},
			{
				"name": "Single-leg calf raises",
				"targetMuscleGroup": "Calves",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Stand on one foot, raise heel, control descent. [Video](https://www.youtube.com/watch?v=-qsRtp_PbVM&t=335s)"
			}
		]
	},
	{
		"muscleGroup": "Abs",
		"exercises": [
			{
				"name": "Weighted crunch",
				"targetMuscleGroup": "Abs",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Hold weight at chest, crunch up, squeeze abs, slow return. [Video](https://www.youtube.com/watch?v=2RrGnjxSsiA&t=125s)"
			},
			{
				"name": "Hanging leg raises",
				"targetMuscleGroup": "Abs",
				"customMuscleGroup": null,
				"bodyweightFraction": 1,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Hang from bar, raise legs to 90°, control return. [Video](https://www.youtube.com/watch?v=2RrGnjxSsiA&t=248s)"
			},
			{
				"name": "Cable rope crunch",
				"targetMuscleGroup": "Abs",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Kneel, grip rope, crunch forward, squeeze abs, control return. [Video](https://www.youtube.com/watch?v=Tn-XvYG9x7w&t=83s)"
			},
			{
				"name": "Ab wheel rollout",
				"targetMuscleGroup": "Abs",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": null,
				"changeAmount": null,
				"note": "Kneel, roll forward, engage core, return slowly. [Video](https://www.youtube.com/watch?v=1G0y8D5rFDc&t=309s)"
			},
			{
				"name": "Plank",
				"targetMuscleGroup": "Abs",
				"customMuscleGroup": null,
				"bodyweightFraction": 1,
				"setType": "Isometric",
				"repRangeStart": 30,
				"repRangeEnd": 60,
				"changeType": null,
				"changeAmount": null,
				"note": "Forearms on floor, keep back straight, hold core tight. [Video](https://www.youtube.com/watch?v=1G0y8D5rFDc&t=112s)"
			},
			{
				"name": "Modified candlestick",
				"targetMuscleGroup": "Abs",
				"customMuscleGroup": null,
				"bodyweightFraction": 1,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": null,
				"changeAmount": null,
				"note": "Lie flat, roll back, extend legs upward, slow return. [Video](https://www.boxrox.com/the-best-single-abs-exercise-for-a-well-developed-six-pack/)"
			}
		]
	},
	{
		"muscleGroup": "Neck",
		"exercises": [
			{
				"name": "Neck curls",
				"targetMuscleGroup": "Neck",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Lie back, nod head forward, control return. [Video](https://www.youtube.com/watch?v=gimeRpdqWQw)"
			},
			{
				"name": "Neck extensions",
				"targetMuscleGroup": "Neck",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Lie face down, lift head back, slow return. [Video](https://www.youtube.com/watch?v=gimeRpdqWQw)"
			},
			{
				"name": "Lateral neck flexion",
				"targetMuscleGroup": "Neck",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Tilt head sideways, return slowly. [Video](https://www.youtube.com/watch?v=gimeRpdqWQw)"
			},
			{
				"name": "Neck bridges",
				"targetMuscleGroup": "Neck",
				"customMuscleGroup": null,
				"bodyweightFraction": 1,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": null,
				"changeAmount": null,
				"note": "Rest on head, lift body slightly, control movement. [Video](https://www.youtube.com/watch?v=gimeRpdqWQw)"
			},
			{
				"name": "Plate neck curls",
				"targetMuscleGroup": "Neck",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": "AbsoluteLoad",
				"changeAmount": 2.5,
				"note": "Hold plate on forehead, nod forward, slow return. [Video](https://www.youtube.com/watch?v=gimeRpdqWQw)"
			},
			{
				"name": "Neck harness extensions",
				"targetMuscleGroup": "Neck",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Attach harness, lean back, return slowly. [Video](https://www.youtube.com/watch?v=gimeRpdqWQw)"
			}
		]
	},
	{
		"muscleGroup": "Adductors",
		"exercises": [
			{
				"name": "Seated adductor machine",
				"targetMuscleGroup": "Adductors",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Sit upright, push knees inward, squeeze, slow return. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
			},
			{
				"name": "Cable standing adduction",
				"targetMuscleGroup": "Adductors",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Attach ankle strap, pull leg inward, control return. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
			},
			{
				"name": "Sumo stance goblet squat",
				"targetMuscleGroup": "Adductors",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Hold dumbbell, squat wide, push through adductors, control up. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
			},
			{
				"name": "Dumbbell sumo deadlift",
				"targetMuscleGroup": "Adductors",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Feet wide, grip dumbbells, hinge hips, push through adductors. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
			},
			{
				"name": "Side-lying adductor raises",
				"targetMuscleGroup": "Adductors",
				"customMuscleGroup": null,
				"bodyweightFraction": 1,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Lie on side, lift bottom leg upward, slow return. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
			}
		]
	},
	{
		"muscleGroup": "Abductors",
		"exercises": [
			{
				"name": "Seated abductor machine",
				"targetMuscleGroup": "Abductors",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Sit upright, push knees outward, squeeze, slow return. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
			},
			{
				"name": "Cable standing abduction",
				"targetMuscleGroup": "Abductors",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Attach ankle strap, lift leg sideways, control return. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
			},
			{
				"name": "Side-lying hip abduction",
				"targetMuscleGroup": "Abductors",
				"customMuscleGroup": null,
				"bodyweightFraction": 1,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Lie on side, lift top leg, hold briefly, slow return. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
			},
			{
				"name": "Dumbbell lateral step-ups",
				"targetMuscleGroup": "Abductors",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Step sideways onto box, push through abductors, control down. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
			},
			{
				"name": "Banded lateral walks",
				"targetMuscleGroup": "Abductors",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Band around thighs, step sideways, maintain tension. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
			}
		]
	}
];
