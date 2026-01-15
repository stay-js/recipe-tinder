CREATE TABLE `category_recipe` (
	`recipe_id` bigint unsigned NOT NULL,
	`category_id` bigint unsigned NOT NULL,
	CONSTRAINT `category_recipe_recipe_id_category_id_pk` PRIMARY KEY(`recipe_id`,`category_id`)
);
--> statement-breakpoint
ALTER TABLE `category_recipe` ADD CONSTRAINT `category_recipe_recipe_id_recipes_id_fk` FOREIGN KEY (`recipe_id`) REFERENCES `recipes`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `category_recipe` ADD CONSTRAINT `category_recipe_category_id_categories_id_fk` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE restrict ON UPDATE restrict;
