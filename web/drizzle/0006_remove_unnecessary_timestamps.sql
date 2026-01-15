ALTER TABLE `ingredient_recipe_data` DROP COLUMN `created_at`;--> statement-breakpoint
ALTER TABLE `ingredient_recipe_data` DROP COLUMN `updated_at`;--> statement-breakpoint
ALTER TABLE `ingredients` DROP COLUMN `created_at`;--> statement-breakpoint
ALTER TABLE `ingredients` DROP COLUMN `updated_at`;--> statement-breakpoint
ALTER TABLE `recipes` DROP COLUMN `updated_at`;
