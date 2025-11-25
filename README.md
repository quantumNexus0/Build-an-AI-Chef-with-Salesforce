# 🍳 AI Chef - Your Intelligent Cooking Assistant

An innovative desktop and mobile application that brings AI-powered cooking assistance to the Salesforce platform, seamlessly integrating ChatGPT-4 Omni to revolutionize your culinary experience.

## 📋 Overview

AI Chef is a Salesforce-native application that leverages the power of ChatGPT-4 Omni to provide intelligent recipe recommendations, cooking tips, ingredient substitutions, and personalized meal planning. Built with Salesforce Lightning Design System (SLDS) and integrated through Prompt Builder, this app delivers a seamless AI cooking experience across desktop and mobile devices.

## ✨ Features

- **Intelligent Recipe Generation** - Get personalized recipes based on available ingredients, dietary preferences, and cuisine types
- **Smart Cooking Assistant** - Real-time cooking guidance and tips powered by ChatGPT-4 Omni
- **Ingredient Substitutions** - Find alternatives for missing ingredients instantly
- **Meal Planning** - AI-powered weekly meal planning based on your preferences
- **Nutritional Information** - Get detailed nutritional breakdowns for recipes
- **Cross-Platform Support** - Works seamlessly on desktop and mobile devices
- **Salesforce Integration** - Native integration with Salesforce App Launcher and Prompt Builder

## 🛠️ Tech Stack

- **Platform:** Salesforce
- **AI Integration:** ChatGPT-4 Omni API
- **Frontend:** SLDS (Salesforce Lightning Design System), HTML, CSS, JavaScript
- **Backend:** Apex
- **Components:** Lightning Web Components (LWC)
- **AI Tools:** Salesforce Prompt Builder

## 🚀 Getting Started

### Prerequisites

- Salesforce Developer Org or Sandbox
- ChatGPT-4 Omni API Key
- Salesforce CLI installed

### Quick Setup

1. **Clone and Deploy**
   ```bash
   git clone https://github.com/quantumNexus0/Build-an-AI-Chef-with-Salesforce.git
   cd Build-an-AI-Chef-with-Salesforce
   sfdx auth:web:login -a MyOrgAlias
   sfdx force:source:deploy -p force-app -u MyOrgAlias
   ```

2. **Configure API Integration**
   - Setup → Named Credentials → Add OpenAI API credentials
   - Configure ChatGPT-4 Omni endpoint

3. **Setup Prompt Builder**
   - Import AI Chef prompt templates
   - Configure input parameters (Ingredients, Dietary_Restrictions, Meal_Type, Serving_Size)

4. **Assign Permissions & Launch**
   - Assign AI Chef permission set to users
   - Access from App Launcher

## 📱 Usage

1. **Generate Recipes:** Enter ingredients, dietary preferences, meal type, and servings
2. **Get AI Suggestions:** Receive 3 personalized recipes with detailed instructions
3. **Follow Step-by-Step:** Each recipe includes prep time, difficulty, and cooking tips
4. **Save & Share:** Store favorite recipes in Salesforce records

## 🏗️ Architecture

```
┌─────────────────────────────────────┐
│     Salesforce App Launcher         │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│   Lightning Web Components (LWC)    │
│         (HTML/CSS/JS + SLDS)        │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│          Apex Controllers           │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│      Salesforce Prompt Builder      │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│       ChatGPT-4 Omni API            │
└─────────────────────────────────────┘
```

## 🎯 Prompt Template

The AI Chef uses a structured prompt with Salesforce Prompt Builder to generate recipes:

```
You are a professional chef specialising in creative cooking. Generate 3 different recipes based on these parameters:

Ingredients available: {!$Input:Ingredients}
Dietary restrictions: {!$Input:Dietary_Restrictions}
Meal type: {!$Input:Meal_Type}
Servings: {!$Input:Serving_Size}

Return your response in the following JSON format for easy HTML rendering:
{
    "recipes":[
        {
            "recipe_number":"1",
            "servings":"1",
            "recipe_name":"Name of recipe 1",
            "description":"Brief 1-2 sentence description of the dish",
            "prep_time":"Time in minutes",
            "cook_time":"Time in minutes",
            "total_time":"Time in minutes",
            "difficulty":"Easy/Medium/Hard",
            "ingredients":[
                {
                    "amount":"quantity",
                    "unit":"measuring unit",
                    "name":"ingredient name"
                }
            ],
            "instructions":[
                "step1 instruction",
                "step2 instruction"
            ],
            "tips":"Optional cooking or serving tip",
            "tags":["tag1", "tag2"]
        }
    ]
}
```

## 🔧 Configuration

### API Settings
- **Endpoint:** `https://api.openai.com/v1/chat/completions`
- **Model:** `gpt-4-omni`
- **Temperature:** 0.7 (for creative recipe generation)

### Prompt Parameters
Configure in Prompt Builder:
- `Ingredients` - Available ingredients
- `Dietary_Restrictions` - Allergies/preferences (vegetarian, vegan, gluten-free, etc.)
- `Meal_Type` - Breakfast, lunch, dinner, snack
- `Serving_Size` - Number of servings

## 🤝 Contributing

Contributions welcome! Fork the repo, create a feature branch, and submit a pull request.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI for ChatGPT-4 Omni API
- Salesforce Lightning Design System
- Salesforce Developer Community

---

⭐ Star this repo if you find it useful!

**Built with ❤️ using Salesforce and ChatGPT-4 Omni**

## Read All About It

- [Salesforce Extensions Documentation](https://developer.salesforce.com/tools/vscode/)
- [Salesforce CLI Setup Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm)
- [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm)
- [Salesforce CLI Command Reference](https://developer.salesforce.com/docs/atlas.en-us.sfdx_cli_reference.meta/sfdx_cli_reference/cli_reference.htm)
