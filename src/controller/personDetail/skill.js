import resumeModel from "../../model/resume.js";

const skill = async (req, res) => {
  try {
    const { id } = req.params;
    const { skillInput } = req.body;

    const resume = await resumeModel.findById(id);
    if (!resume) {
      return res.status(400).json({ message: "Resume not found" });
    }

    if (Array.isArray(skillInput)) {
      resume.skill.push(...skillInput); // spread the array items
    } else {
      resume.skill.push(skillInput); // single value
    }
    await resume.save();

    console.log("Skill input:", req.body.skillInput);

    res
      .status(200)
      .json({ message: "Skill added successfully", skill: resume.skill });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
export default skill;
