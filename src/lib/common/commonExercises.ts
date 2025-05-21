import type { SplitExerciseTemplateWithoutIdsOrIndex } from '$lib/components/mesocycleAndExerciseSplit/commonTypes';
import type { MuscleGroup } from '@prisma/client';

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
			muscleGroup: 'Biceps',
			exercises: [
				{
					name: 'Dumbbell bicep curls',
					targetMuscleGroup: 'Biceps',
					customMuscleGroup: null,
					bodyweightFraction: null,
					setType: 'Straight',
					repRangeStart: 10,
					repRangeEnd: 20,
					changeType: null,
					changeAmount: null,
					note: null
				},
				{
					name: 'Dumbbell hammer curls',
					targetMuscleGroup: 'Biceps',
					customMuscleGroup: null,
					bodyweightFraction: null,
					setType: 'Straight',
					repRangeStart: 10,
					repRangeEnd: 15,
					changeType: null,
					changeAmount: null,
					note: null
				},
				{
					name: 'Concentration curls',
					targetMuscleGroup: 'Biceps',
					customMuscleGroup: null,
					bodyweightFraction: null,
					setType: 'Straight',
					repRangeStart: 10,
					repRangeEnd: 20,
					changeType: null,
					changeAmount: null,
					note: null
				},
				{
					name: 'Preacher curls',
					targetMuscleGroup: 'Biceps',
					customMuscleGroup: null,
					bodyweightFraction: null,
					setType: 'Down',
					repRangeStart: 10,
					repRangeEnd: 20,
					changeType: 'AbsoluteLoad',
					changeAmount: 2.5,
					note: null
				},
				{
					name: 'Lying dumbbell curls',
					targetMuscleGroup: 'Biceps',
					customMuscleGroup: null,
					bodyweightFraction: null,
					setType: 'Straight',
					repRangeStart: 10,
					repRangeEnd: 15,
					changeType: null,
					changeAmount: null,
					note: null
				}
			]
		},
		{
			muscleGroup: 'SideDelts',
			exercises: [
				{
					name: 'Leaning dumbbell lateral raises',
					targetMuscleGroup: 'SideDelts',
					customMuscleGroup: null,
					bodyweightFraction: null,
					setType: 'Straight',
					repRangeStart: 10,
					repRangeEnd: 20,
					changeType: null,
					changeAmount: null,
					note: null
				},
				{
					name: 'Behind the back cable lateral raises',
					targetMuscleGroup: 'SideDelts',
					customMuscleGroup: null,
					bodyweightFraction: null,
					setType: 'Straight',
					repRangeStart: 10,
					repRangeEnd: 20,
					changeType: null,
					changeAmount: null,
					note: null
				}
			]
		},
		{
			muscleGroup: 'RearDelts',
			exercises: [
				{
					name: 'Face pull',
					targetMuscleGroup: 'RearDelts',
					customMuscleGroup: null,
					bodyweightFraction: null,
					setType: 'Straight',
					repRangeStart: 10,
					repRangeEnd: 15,
					changeType: null,
					changeAmount: null,
					note: null
				},
				{
					name: 'Machine rear delt fly',
					targetMuscleGroup: 'RearDelts',
					customMuscleGroup: null,
					bodyweightFraction: null,
					setType: 'Straight',
					repRangeStart: 10,
					repRangeEnd: 15,
					changeType: null,
					changeAmount: null,
					note: null
				}
			]
		},
		{
			muscleGroup: 'Quads',
			exercises: [
				{
					name: 'Barbell squats',
					targetMuscleGroup: 'Quads',
					customMuscleGroup: null,
					bodyweightFraction: 1,
					setType: 'Down',
					repRangeStart: 5,
					repRangeEnd: 10,
					changeType: 'AbsoluteLoad',
					changeAmount: 10,
					note: null
				},
				{
					name: 'Leg press',
					targetMuscleGroup: 'Quads',
					customMuscleGroup: null,
					bodyweightFraction: null,
					setType: 'Straight',
					repRangeStart: 10,
					repRangeEnd: 20,
					changeType: null,
					changeAmount: null,
					note: null
				},
				{
					name: 'Lunges',
					targetMuscleGroup: 'Quads',
					customMuscleGroup: null,
					bodyweightFraction: 0.85,
					setType: 'Straight',
					repRangeStart: 10,
					repRangeEnd: 15,
					changeType: null,
					changeAmount: null,
					note: null
				},
				{
					name: 'Leg extensions',
					targetMuscleGroup: 'Quads',
					customMuscleGroup: null,
					bodyweightFraction: null,
					setType: 'Straight',
					repRangeStart: 10,
					repRangeEnd: 20,
					changeType: null,
					changeAmount: null,
					note: null
				}
			]
		}
	];
