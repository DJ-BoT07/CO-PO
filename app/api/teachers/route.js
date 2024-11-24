import { db } from "../../drizzle/db"; // Your database connection
import { TeacherTable } from "../../drizzle/schema"; // Your schema

export async function POST(req) {
  try {
    const body = await req.json();

    // Insert the record into the database
    const result = await db.insert(TeacherTable).values({
      name: body.name,
      academic_year: parseInt(body.academic_year),
      semester: parseInt(body.semester),
      internal_marks: parseInt(body.internal_marks),
      external_marks: parseInt(body.external_marks),
      class: body.class,
      division: body.division,
      is_admin: body.is_admin,
    });

    console.log("Record inserted successfully:", result);

    return new Response(JSON.stringify({ message: "Record inserted successfully" }), {
      status: 201,
    });
  } catch (error) {
    console.error("Error inserting record:", error);

    return new Response(JSON.stringify({ message: "Failed to insert record" }), {
      status: 500,
    });
  }
}
