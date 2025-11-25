# Pumping Lemma Simulator for Context-Free Languages

<div align="center">

Interactive visualization of the Pumping Lemma for Context Free Languages

[![GitHub License](https://img.shields.io/github/license/KaranJangid8656/Computation-Modeling)](LICENSE)
[![GitHub Stars](https://img.shields.io/github/stars/KaranJangid8656/Computation-Modeling?style=social)](https://github.com/KaranJangid8656/Computation-Modeling)
[![GitHub Forks](https://img.shields.io/github/forks/KaranJangid8656/Computation-Modeling?style=social)](https://github.com/KaranJangid8656/Computation-Modeling)

</div>

## 📖 Table of Contents
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage Guide](#usage-guide)
- [Understanding the Pumping Lemma](#understanding-the-pumping-lemma)
- [Language Patterns](#language-patterns)
- [Visualization Guide](#visualization-guide)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

The Pumping Lemma Simulator is an interactive web application designed to help students and educators understand the Pumping Lemma for Context-Free Languages (CFL). This tool provides step-by-step visualization of how the pumping lemma works, making it easier to grasp this fundamental concept in formal language theory.

### What is the Pumping Lemma?

The Pumping Lemma for Context-Free Languages states that for any context-free language L, there exists a pumping length p such that any string s in L with |s| ≥ p can be divided into five parts s = uvxyz satisfying:
1. |vxy| ≤ p
2. |vy| ≥ 1
3. For all i ≥ 0, uvⁱxyⁱz ∈ L

## ✨ Features

- **Interactive Visualization**: See the decomposition of strings in real-time
- **Multiple Language Patterns**: Pre-configured examples for common CFL patterns
- **Custom Input**: Test with your own strings and parameters
- **Step-by-Step Simulation**: Detailed logging of the pumping process
- **Condition Checking**: Automatic validation of pumping lemma conditions
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🚀 Installation

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/KaranJangid8656/Computation-Modeling.git
   cd Computation-Modeling/Pumping-Lemma-Simulator-CFL-
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
# or
yarn build
```

## 📚 Usage Guide

### Getting Started

1. **Select a Language Pattern**: Choose from pre-configured patterns or use custom input
2. **Set Parameters**: Adjust the pumping length and string decomposition
3. **Run Simulation**: Click "Run Simulation" to see the pumping lemma in action
4. **Analyze Results**: View the visualization and check if conditions are satisfied

### Interface Overview

#### Configuration Panel (Left)
- **Language Pattern Selector**: Choose from predefined CFL patterns
- **String Input**: Enter custom strings or use pattern examples
- **Pumping Length**: Set the pumping length p
- **Decomposition Controls**: Adjust u, v, x, y, z segment lengths
- **Pumping Multiplier**: Set how many times to pump v and y

#### Visualization Panel (Center)
- **String Decomposition**: Visual representation of uvxyz
- **Pumped String**: Result after pumping v and y
- **Validation Result**: Shows if the pumped string is in the language

#### Simulation Log (Right)
- **Step-by-step logging**: Detailed process information
- **Lemma Conditions**: Real-time condition checking

## 🧠 Understanding the Pumping Lemma

### Key Concepts

1. **Pumping Length (p)**: The minimum length for strings to be pumpable
2. **Decomposition**: Breaking string s into uvxyz
3. **Pumping**: Repeating v and y segments i times
4. **Conditions**: Two critical requirements that must be satisfied

### The Two Conditions

1. **|vxy| ≤ p**: The middle three segments must not exceed the pumping length
2. **|vy| ≥ 1**: At least one of v or y must be non-empty

### How to Use the Simulator

1. **Choose a Pattern**: Select a language pattern like aⁿbⁿ or aⁿbⁿcⁿ
2. **Set Parameters**: Ensure the string length ≥ pumping length
3. **Decompose**: Break the string into uvxyz segments
4. **Check Conditions**: Verify both conditions are satisfied
5. **Pump**: Apply pumping to see if the result stays in the language

## 🎭 Language Patterns

### Available Patterns

1. **L = {aⁿbⁿcⁿ : n ≥ 0}**
   - Equal numbers of a's, b's, and c's
   - Example: "aaabbbccc"
   - Parameters: n, p

2. **L = {aⁿbᵐ : n ≥ m, n, m ≥ 0}**
   - More a's than b's
   - Example: "aaabb"
   - Parameters: n, m, p

3. **L = {w ∈ {a,b}* : n_a(w) = n_b(w)}**
   - Equal number of a's and b's
   - Example: "aabb"
   - Parameter: p

4. **L = {wwᴿ : w ∈ {a,b}*}**
   - Palindromes of even length
   - Example: "abba"
   - Parameter: p

5. **L = {a^(2ⁿ) : n ≥ 0}**
   - Strings of 'a' with length a power of 2
   - Example: "aaaa"
   - Parameter: p

### Custom Patterns

You can test any string by:
1. Selecting "Custom" from the pattern dropdown
2. Entering your own string
3. Setting appropriate parameters

## 🎨 Visualization Guide

### Color Coding

- **Green**: Valid condition or result
- **Red**: Invalid condition or result
- **Blue/Indigo**: UI elements and headers
- **Gray**: Neutral information

### Understanding the Display

1. **Segment Visualization**: Each segment (u, v, x, y, z) is color-coded
2. **Pumping Result**: Shows the string after applying pumping
3. **Condition Status**: Real-time feedback on lemma conditions
4. **Log Messages**: Detailed explanation of each step

### Tips for Effective Use

- Start with simple patterns before moving to complex ones
- Use the randomize button to explore different decompositions
- Pay attention to the condition status indicators
- Read the simulation log to understand the process

## 🛠️ Advanced Features

### Random Decomposition

Click the 🎲 button to generate random valid decompositions. This helps explore different ways to split strings while satisfying the conditions.

### Theme Customization

Toggle between light and dark modes using the theme button in the top-right corner. Your preference is saved automatically.

### Responsive Design

The simulator adapts to different screen sizes:
- **Desktop**: Three-column layout
- **Tablet**: Stacked layout with adjusted widths
- **Mobile**: Single-column layout

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Report Issues**: Found a bug? [Create an issue](https://github.com/KaranJangid8656/Computation-Modeling/issues)
2. **Suggest Features**: Have an idea? [Open a feature request](https://github.com/KaranJangid8656/Computation-Modeling/issues)
3. **Submit Pull Requests**: Fixed something? [Submit a PR](https://github.com/KaranJangid8656/Computation-Modeling/pulls)

### Development Setup

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Code Style

- Use TypeScript for type safety
- Follow the existing code structure
- Add comments for complex logic
- Ensure responsive design compatibility

## 📖 Educational Resources

### Further Reading

- [Formal Languages and Automata Theory](https://en.wikipedia.org/wiki/Formal_language)
- [Pumping Lemma for Context-Free Languages](https://en.wikipedia.org/wiki/Pumping_lemma_for_context-free_languages)
- [Context-Free Grammar](https://en.wikipedia.org/wiki/Context-free_grammar)

### Video Tutorials

- [Pumping Lemma Explained](https://www.youtube.com/watch?v=example)
- [CFL Pumping Lemma Examples](https://www.youtube.com/watch?v=example)

## 🐛 Troubleshooting

### Common Issues

1. **String Too Short**: Ensure |s| ≥ p for pumping lemma to apply
2. **Invalid Decomposition**: Check that segments sum to the original string length
3. **Conditions Not Met**: Adjust decomposition to satisfy both conditions

### Performance Tips

- Use shorter strings for faster initial testing
- Clear the log periodically if it becomes too long
- Refresh the page if you encounter display issues

## 📄 License

This project is licensed under the [MIT License](LICENSE). You are free to:
- Use the software for any purpose
- Modify the code
- Distribute copies
- Create derivative works

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [Lucide](https://lucide.dev/)
- UI components by [shadcn/ui](https://ui.shadcn.com/)

## 📞 Contact

Have questions or feedback? Reach out:
- [GitHub Issues](https://github.com/KaranJangid8656/Computation-Modeling/issues)
- [Email](mailto:your.email@example.com)

---

<div align="center">

Made with ❤️ for Computer Science Education

[⬆ Back to Top](#pumping-lemma-simulator-for-context-free-languages)

</div>
