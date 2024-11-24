CREATE TABLE IF NOT EXISTS "teachers" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" varchar NOT NULL,
	"year" varchar NOT NULL,
	"semester" integer NOT NULL,
	"internal_marks" integer NOT NULL,
	"external_marks" integer NOT NULL,
	"class" varchar NOT NULL,
	"division" varchar NOT NULL,
	"is_admin" boolean DEFAULT false NOT NULL
);
