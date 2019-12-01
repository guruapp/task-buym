<?php

use Illuminate\Database\Seeder;

use App\Task;

class TasksTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Task::truncate();

        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 6; $i++) {
            $taskLetter = chr(65 + $i);
            Task::create([
                'name' => "משימה $taskLetter",
                'done' => $faker->boolean,
            ]);
        }
    }
}
