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
				"note": "Highly effective for chest hypertrophy. [Video](https://www.youtube.com/watch?v=NsEbXsTwas8)"
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
				"note": "Targets upper chest. [Video](https://www.youtube.com/watch?v=7qFp5khuoFA)"
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
				"note": "Provides constant tension. [Video](https://www.youtube.com/watch?v=fGm-ef-4PVk)"
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
				"note": "Great bodyweight exercise. [Video](https://bing.com/search?q=Jeff+Nippard+RP+Fitness+chest+exercise+videos)"
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
				"note": "Emphasizes upper chest. [Video](https://www.youtube.com/watch?v=NsEbXsTwas8)"
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
				"note": "Great for lower chest. [Video](https://barbend.com/jeff-nippard-ranks-chest-exercises-for-hypertrophy/)"
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
				"note": "Allows deeper stretch. [Video](https://jeffnippard.com/blogs/news/the-ultimate-push-workout-for-muscle-growth-chest-shoulders-triceps-2023)"
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
				"note": "Focus on controlled movement and deep stretch. [Video](https://www.youtube.com/watch?v=NsEbXsTwas8&t=0s)"
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
				"note": "Targets upper chest with a greater stretch. [Video](https://www.youtube.com/watch?v=NsEbXsTwas8&t=59s)"
			}
		]
	},
	{
    "muscleGroup": "Front Delts",
    "exercises": [
        {
            "name": "Machine shoulder press",
            "targetMuscleGroup": "Front Delts",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 8,
            "repRangeEnd": 12,
            "changeType": "AbsoluteLoad",
            "changeAmount": 5,
            "note": "Provides stability and allows for heavier loading. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
        },
        {
            "name": "EZ-bar front raise",
            "targetMuscleGroup": "Front Delts",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 10,
            "repRangeEnd": 15,
            "changeType": null,
            "changeAmount": null,
            "note": "Targets the front delts with a smooth resistance profile. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
        },
        {
            "name": "Dumbbell shoulder press",
            "targetMuscleGroup": "Front Delts",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 8,
            "repRangeEnd": 12,
            "changeType": "AbsoluteLoad",
            "changeAmount": 5,
            "note": "Allows for a greater range of motion compared to barbell presses. [Video](https://www.youtube.com/watch?v=SgyUoY0IZ7A)"
        },
        {
            "name": "Seated dumbbell shoulder press",
            "targetMuscleGroup": "Front Delts",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 8,
            "repRangeEnd": 12,
            "changeType": "AbsoluteLoad",
            "changeAmount": 5,
            "note": "Provides better stability and control. [Video](https://www.youtube.com/watch?v=SgyUoY0IZ7A)"
        },
        {
            "name": "Dumbbell front raise",
            "targetMuscleGroup": "Front Delts",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 10,
            "repRangeEnd": 15,
            "changeType": null,
            "changeAmount": null,
            "note": "Effective for isolating the front delts. [Video](https://www.youtube.com/watch?v=SgyUoY0IZ7A)"
        },
        {
            "name": "Cable front raise",
            "targetMuscleGroup": "Front Delts",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 12,
            "repRangeEnd": 20,
            "changeType": null,
            "changeAmount": null,
            "note": "Provides constant tension throughout the movement. [Video](https://www.youtube.com/watch?v=SgyUoY0IZ7A)"
        }
    ]
},
	{
		"muscleGroup": "Side Delts",
		"exercises": [
			{
				"name": "Leaning dumbbell lateral raises",
				"targetMuscleGroup": "Side Delts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Enhances range of motion for better side delt activation. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
			},
			{
				"name": "Behind the back cable lateral raises",
				"targetMuscleGroup": "Side Delts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Provides constant tension throughout the movement. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
			},
			{
				"name": "Super ROM lateral raises",
				"targetMuscleGroup": "Side Delts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Maximizes range of motion for full side delt engagement. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
			},
			{
				"name": "Cross-body cable lateral raises",
				"targetMuscleGroup": "Side Delts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Great for stretching and engaging the side delts. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
			},
			{
				"name": "Dumbbell lateral raises",
				"targetMuscleGroup": "Side Delts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Classic movement for building round shoulders. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
			},
			{
				"name": "Cable Y-raises",
				"targetMuscleGroup": "Side Delts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Targets the lateral delts with an extended range of motion. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
			}
		]
	},
	{
		"muscleGroup": "Rear Delts",
		"exercises": [
			{
				"name": "Face pull",
				"targetMuscleGroup": "Rear Delts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Great for shoulder health and rear delt activation. [Video](https://www.youtube.com/watch?v=qfc70k40318)"
			},
			{
				"name": "Machine rear delt fly",
				"targetMuscleGroup": "Rear Delts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 10,
				"repRangeEnd": 15,
				"changeType": null,
				"changeAmount": null,
				"note": "Provides constant tension for rear delts. [Video](https://www.youtube.com/watch?v=P5CXx_jgTDE)"
			},
			{
				"name": "Bent-over reverse dumbbell fly",
				"targetMuscleGroup": "Rear Delts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Maximizes rear delt isolation. [Video](https://www.youtube.com/watch?v=qfc70k40318)"
			},
			{
				"name": "Reverse pec deck",
				"targetMuscleGroup": "Rear Delts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Great for controlled rear delt activation. [Video](https://www.youtube.com/watch?v=qfc70k40318)"
			},
			{
				"name": "Cable rear delt fly",
				"targetMuscleGroup": "Rear Delts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Provides constant tension throughout the movement. [Video](https://www.youtube.com/watch?v=P5CXx_jgTDE)"
			},
			{
				"name": "Single-arm rear delt cable fly",
				"targetMuscleGroup": "Rear Delts",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 12,
				"repRangeEnd": 20,
				"changeType": null,
				"changeAmount": null,
				"note": "Allows for better unilateral control. [Video](https://www.youtube.com/watch?v=P5CXx_jgTDE)"
			}
		]
	},
	{
    "muscleGroup": "Back",
    "exercises": [
        {
            "name": "Pull-ups",
            "targetMuscleGroup": "Back",
            "customMuscleGroup": null,
            "bodyweightFraction": 1,
            "setType": "Straight",
            "repRangeStart": 6,
            "repRangeEnd": 12,
            "changeType": null,
            "changeAmount": null,
            "note": "Fundamental back builder. [Video](https://www.youtube.com/watch?v=12xHxUnBEiI)"
        },
        {
            "name": "Lat pulldown (wide grip)",
            "targetMuscleGroup": "Back",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 10,
            "repRangeEnd": 15,
            "changeType": null,
            "changeAmount": null,
            "note": "Great for lat width. [Video](https://www.youtube.com/watch?v=12xHxUnBEiI)"
        },
        {
            "name": "Seated cable row",
            "targetMuscleGroup": "Back",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 8,
            "repRangeEnd": 12,
            "changeType": "AbsoluteLoad",
            "changeAmount": 5,
            "note": "Provides constant tension for back thickness. [Video](https://www.youtube.com/watch?v=12xHxUnBEiI)"
        },
        {
            "name": "Bent-over barbell row",
            "targetMuscleGroup": "Back",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 6,
            "repRangeEnd": 12,
            "changeType": "AbsoluteLoad",
            "changeAmount": 5,
            "note": "Great for overall back development. [Video](https://www.youtube.com/watch?v=axoeDmW0oAY)"
        },
        {
            "name": "Dumbbell single-arm row",
            "targetMuscleGroup": "Back",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 8,
            "repRangeEnd": 12,
            "changeType": "AbsoluteLoad",
            "changeAmount": 5,
            "note": "Allows for better unilateral control. [Video](https://www.youtube.com/watch?v=axoeDmW0oAY)"
        },
        {
            "name": "Chest-supported machine row",
            "targetMuscleGroup": "Back",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 8,
            "repRangeEnd": 12,
            "changeType": "AbsoluteLoad",
            "changeAmount": 5,
            "note": "Eliminates momentum for strict form. [Video](https://www.youtube.com/watch?v=12xHxUnBEiI)"
        },
        {
            "name": "Deadlifts",
            "targetMuscleGroup": "Back",
            "customMuscleGroup": null,
            "bodyweightFraction": 1,
            "setType": "Straight",
            "repRangeStart": 5,
            "repRangeEnd": 10,
            "changeType": "AbsoluteLoad",
            "changeAmount": 10,
            "note": "Essential for overall back strength. [Video](https://www.youtube.com/watch?v=12xHxUnBEiI)"
        },
        {
            "name": "Reverse grip lat pulldown",
            "targetMuscleGroup": "Back",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 10,
            "repRangeEnd": 15,
            "changeType": null,
            "changeAmount": null,
            "note": "Targets lower lats effectively. [Video](https://www.youtube.com/watch?v=12xHxUnBEiI)"
        },
        {
            "name": "Cable lat pullover",
            "targetMuscleGroup": "Back",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 12,
            "repRangeEnd": 20,
            "changeType": null,
            "changeAmount": null,
            "note": "Great for lat isolation. [Video](https://www.youtube.com/watch?v=12xHxUnBEiI)"
        },
        {
            "name": "T-bar row",
            "targetMuscleGroup": "Back",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 8,
            "repRangeEnd": 12,
            "changeType": "AbsoluteLoad",
            "changeAmount": 5,
            "note": "Builds back thickness and strength. [Video](https://www.youtube.com/watch?v=12xHxUnBEiI)"
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
            "note": "Classic trap builder. [Video](https://www.youtube.com/watch?v=C6sYjDFuq9I)"
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
            "note": "Preferred variation for better biomechanics. [Video](https://www.youtube.com/watch?v=C6sYjDFuq9I)"
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
            "note": "Allows for greater range of motion. [Video](https://www.youtube.com/watch?v=C6sYjDFuq9I)"
        },
        {
            "name": "High incline dumbbell shrug-row",
            "targetMuscleGroup": "Traps",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 12,
            "repRangeEnd": 20,
            "changeType": null,
            "changeAmount": null,
            "note": "Hybrid movement for upper trap activation. [Video](https://www.youtube.com/watch?v=r74q9EF_ni4)"
        },
        {
            "name": "Overhead cable Lu raise",
            "targetMuscleGroup": "Traps",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 12,
            "repRangeEnd": 20,
            "changeType": null,
            "changeAmount": null,
            "note": "Targets upper traps in an overhead position. [Video](https://www.youtube.com/watch?v=r74q9EF_ni4)"
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
            "note": "Provides stability for controlled reps. [Video](https://www.youtube.com/watch?v=C6sYjDFuq9I)"
        },
        {
            "name": "Standing calf raise machine shrugs",
            "targetMuscleGroup": "Traps",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 12,
            "repRangeEnd": 20,
            "changeType": null,
            "changeAmount": null,
            "note": "Unique variation for trap isolation. [Video](https://www.youtube.com/watch?v=C6sYjDFuq9I)"
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
            "note": "Provides constant tension throughout the movement. [Video](https://www.youtube.com/watch?v=C6sYjDFuq9I)"
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
				"note": "Great for overall triceps activation. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=60s)"
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
				"note": "Targets the long head of the triceps. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=193s)"
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
				"note": "Unique variation for balanced arm development. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=293s)"
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
				"note": "Effective for triceps hypertrophy. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=346s)"
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
				"note": "Allows for better control and reduced strain. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=391s)"
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
				"note": "High tension and effective for triceps overload. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=471s)"
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
				"note": "Hybrid between close grip bench press and skull crusher. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=538s)"
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
				"note": "Maximizes long head contraction. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=592s)"
			},
			{
				"name": "Dips (machine)",
				"targetMuscleGroup": "Triceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 8,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Great for overall triceps development. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=645s)"
			},
			{
				"name": "Close grip bench press",
				"targetMuscleGroup": "Triceps",
				"customMuscleGroup": null,
				"bodyweightFraction": null,
				"setType": "Straight",
				"repRangeStart": 6,
				"repRangeEnd": 12,
				"changeType": "AbsoluteLoad",
				"changeAmount": 5,
				"note": "Progressive overload for medial and lateral heads. [Video](https://www.youtube.com/watch?v=OpRMRhr0Ycc&t=726s)"
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
				"note": "Great for isolating the triceps and maximizing tension. [Video](https://www.youtube.com/watch?v=4re6CJ0XNF8)"
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
				"note": "Classic biceps builder. [Video](https://www.youtube.com/watch?v=i1YgFZB6alI&t=420s)"
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
				"note": "Targets brachialis for thicker arms. [Video](https://www.youtube.com/watch?v=_GziHDdJY10)"
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
				"note": "Great for isolating the biceps peak. [Video](https://www.youtube.com/watch?v=i1YgFZB6alI&t=510s)"
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
				"note": "Eliminates momentum for strict form. [Video](https://www.youtube.com/watch?v=j5f_0rNkPwU)"
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
				"note": "Maximizes stretch at the bottom. [Video](https://www.youtube.com/watch?v=HsV4wDUxdow&t=996s)"
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
				"note": "More wrist-friendly than straight bar curls. [Video](https://www.youtube.com/watch?v=_GziHDdJY10)"
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
				"note": "Keeps tension throughout the movement. [Video](https://www.youtube.com/watch?v=j5f_0rNkPwU)"
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
				"note": "Stretches the biceps in the lengthened position. [Video](https://www.youtube.com/watch?v=j5f_0rNkPwU)"
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
            "note": "Targets the brachioradialis muscle. [Video](https://www.youtube.com/watch?v=MfMxT_jXcPE&t=74s)"
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
            "note": "Works both the front and back of the forearm. [Video](https://www.youtube.com/watch?v=MfMxT_jXcPE&t=159s)"
        },
        {
            "name": "Barbell towel hold",
            "targetMuscleGroup": "Forearms",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Isometric",
            "repRangeStart": 30,
            "repRangeEnd": 60,
            "changeType": null,
            "changeAmount": null,
            "note": "Develops grip strength. [Video](https://www.youtube.com/watch?v=MfMxT_jXcPE&t=217s)"
        },
        {
            "name": "Plate pinch",
            "targetMuscleGroup": "Forearms",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Isometric",
            "repRangeStart": 30,
            "repRangeEnd": 60,
            "changeType": null,
            "changeAmount": null,
            "note": "Strengthens finger flexors. [Video](https://www.youtube.com/watch?v=MfMxT_jXcPE&t=295s)"
        },
        {
            "name": "Hand grippers",
            "targetMuscleGroup": "Forearms",
            "customMuscleGroup": null,
            "bodyweightFraction": null,
            "setType": "Straight",
            "repRangeStart": 12,
            "repRangeEnd": 20,
            "changeType": null,
            "changeAmount": null,
            "note": "Trains crushing grip strength. [Video](https://www.youtube.com/watch?v=MfMxT_jXcPE&t=353s)"
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
            "note": "Isolates the anterior forearm. [Video](https://www.youtube.com/watch?v=MfMxT_jXcPE&t=353s)"
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
            "note": "Strengthens the posterior forearm. [Video](https://www.youtube.com/watch?v=MfMxT_jXcPE&t=353s)"
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
				"note": "Fundamental quad builder. [Video](https://www.youtube.com/watch?v=i2ARp-lzies)"
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
				"note": "Great for controlled quad hypertrophy. [Video](https://www.youtube.com/watch?v=i2ARp-lzies)"
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
				"note": "Excellent unilateral quad activation. [Video](https://www.youtube.com/watch?v=i2ARp-lzies)"
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
				"note": "Isolates the quads effectively. [Video](https://www.youtube.com/watch?v=i2ARp-lzies)"
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
				"note": "Dr. Mike Israetel’s top dumbbell quad exercise. [Video](https://www.youtube.com/watch?v=-C5U1mzoocY&t=481s)"
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
				"note": "Great for quad engagement and depth. [Video](https://www.youtube.com/watch?v=-C5U1mzoocY&t=481s)"
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
				"note": "Excellent for unilateral quad development. [Video](https://www.youtube.com/watch?v=-C5U1mzoocY&t=481s)"
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
            "note": "Great for hamstring lengthening and strength. [Video](https://www.youtube.com/watch?v=0a_fVS2s4Ho)"
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
            "note": "More effective than lying leg curls for hamstring growth. [Video](https://www.youtube.com/watch?v=Lh3iMIcbkBQ)"
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
            "note": "Targets knee flexion movement. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
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
            "note": "Excellent for eccentric hamstring strength. [Video](https://www.youtube.com/watch?v=0a_fVS2s4Ho)"
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
            "note": "Targets both hip extension and knee flexion. [Video](https://www.youtube.com/watch?v=0a_fVS2s4Ho)"
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
            "note": "Provides constant tension throughout the movement. [Video](https://www.youtube.com/watch?v=0a_fVS2s4Ho)"
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
            "note": "Allows for greater range of motion compared to barbell RDLs. [Video](https://www.youtube.com/watch?v=0a_fVS2s4Ho)"
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
            "note": "One of the best glute-building exercises. [Video](https://www.youtube.com/watch?v=3ryh7PNhz3E)"
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
            "note": "Great for glute activation and strength. [Video](https://www.youtube.com/watch?v=XgekALiC8Ik)"
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
            "note": "Excellent for unilateral glute development. [Video](https://barbend.com/6-exercises-jeff-nippard-scientific-lower-body-workout/)"
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
            "note": "Isolates the glutes effectively. [Video](https://www.youtube.com/watch?v=dJa_Nf4zdik)"
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
            "note": "Great for unilateral glute activation. [Video](https://www.youtube.com/watch?v=BhUpWmlKcJ8)"
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
            "note": "Targets glutes and hamstrings effectively. [Video](https://fitnessvolt.com/jeff-nippard-rates-glute-exercises/)"
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
            "note": "Provides stability for heavier loading. [Video](https://www.youtube.com/watch?v=3ryh7PNhz3E)"
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
            "note": "Great for full glute engagement. [Video](https://www.youtube.com/watch?v=BhUpWmlKcJ8)"
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
				"note": "Targets gastrocnemius muscle. [Video](https://www.youtube.com/watch?v=-qsRtp_PbVM&t=224s)"
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
				"note": "Best for soleus activation. [Video](https://www.youtube.com/watch?v=21inrjhoFkQ&t=531s)"
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
				"note": "Use dumbbells for added resistance. [Video](https://www.youtube.com/watch?v=-qsRtp_PbVM&t=224s)"
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
				"note": "Place dumbbells on knees for resistance. [Video](https://www.youtube.com/watch?v=21inrjhoFkQ&t=531s)"
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
				"note": "Provides deep stretch. [Video](https://www.youtube.com/watch?v=21inrjhoFkQ&t=327s)"
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
				"note": "Improves balance and unilateral strength. [Video](https://www.youtube.com/watch?v=-qsRtp_PbVM&t=335s)"
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
            "note": "Great for upper abs hypertrophy. [Video](https://www.youtube.com/watch?v=2RrGnjxSsiA&t=125s)"
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
            "note": "Targets lower abs effectively. [Video](https://www.youtube.com/watch?v=2RrGnjxSsiA&t=248s)"
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
            "note": "Provides constant tension for abs. [Video](https://www.youtube.com/watch?v=Tn-XvYG9x7w&t=83s)"
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
            "note": "Great for core stability and strength. [Video](https://www.youtube.com/watch?v=1G0y8D5rFDc&t=309s)"
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
            "note": "Essential for core endurance. [Video](https://www.youtube.com/watch?v=1G0y8D5rFDc&t=112s)"
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
            "note": "Advanced core movement for eccentric strength. [Video](https://www.boxrox.com/the-best-single-abs-exercise-for-a-well-developed-six-pack/)"
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
            "note": "Strengthens the front of the neck. [Video](https://www.youtube.com/watch?v=gimeRpdqWQw)"
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
            "note": "Targets the back of the neck. [Video](https://www.youtube.com/watch?v=gimeRpdqWQw)"
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
            "note": "Works the sides of the neck. [Video](https://www.youtube.com/watch?v=gimeRpdqWQw)"
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
            "note": "Advanced movement for neck strength. [Video](https://www.youtube.com/watch?v=gimeRpdqWQw)"
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
            "note": "Adds resistance for progressive overload. [Video](https://www.youtube.com/watch?v=gimeRpdqWQw)"
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
            "note": "Uses a harness for controlled resistance. [Video](https://www.youtube.com/watch?v=gimeRpdqWQw)"
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
            "note": "Provides constant tension for adductor activation. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
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
            "note": "Great for unilateral adductor engagement. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
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
            "note": "Targets adductors with a deep squat position. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
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
            "note": "Engages adductors through a wide stance. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
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
            "note": "Bodyweight movement for adductor isolation. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
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
            "note": "Provides constant tension for abductor activation. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
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
            "note": "Great for unilateral abductor engagement. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
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
            "note": "Bodyweight movement for abductor isolation. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
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
            "note": "Engages abductors through lateral movement. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
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
            "note": "Great for dynamic abductor activation. [Video](https://www.youtube.com/watch?v=XFpT41748hM)"
        }
    ]
}



];
