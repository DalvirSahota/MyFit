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
				"note": "Enhances range of motion for better side delt activation. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
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
				"note": "Provides constant tension throughout the movement. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
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
				"note": "Maximizes range of motion for full side delt engagement. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
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
				"note": "Great for stretching and engaging the side delts. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
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
				"note": "Classic movement for building round shoulders. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
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
				"note": "Targets the lateral delts with an extended range of motion. [Video](https://www.youtube.com/watch?v=21lYP86dHW4)"
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
				"note": "Great for shoulder health and rear delt activation. [Video](https://www.youtube.com/watch?v=qfc70k40318)"
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
				"note": "Provides constant tension for rear delts. [Video](https://www.youtube.com/watch?v=P5CXx_jgTDE)"
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
				"note": "Maximizes rear delt isolation. [Video](https://www.youtube.com/watch?v=qfc70k40318)"
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
				"note": "Great for controlled rear delt activation. [Video](https://www.youtube.com/watch?v=qfc70k40318)"
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
				"note": "Provides constant tension throughout the movement. [Video](https://www.youtube.com/watch?v=P5CXx_jgTDE)"
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
				"note": "Allows for better unilateral control. [Video](https://www.youtube.com/watch?v=P5CXx_jgTDE)"
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
	}
];
