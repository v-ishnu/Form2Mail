# 🚀 Contributing to Form2Mail

Thank you for your interest in contributing to [Form2Mail](https://github.com/v-ishnu/Form2Mail)! I welcome contributions from everyone! Here's how to get started:

## 📋 Prerequisites
- GitHub account
- Git installed locally
- Node.js (if contributing to code)

## 🛠 Development Setup

1. **Fork the repository**
   - Click "Fork" at [github.com/v-ishnu/Form2Mail](https://github.com/v-ishnu/Form2Mail)

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Form2Mail.git
   cd Form2Mail
   ```

3. **Set up upstream**
   ```bash
   git remote add upstream https://github.com/v-ishnu/Form2Mail.git
   ```

## 🔄 Making Changes

### Create a branch
```bash
git checkout -b type/description
# Examples:
# feat/email-validation
# fix/issue-42
# docs/update-instructions
```

### Make your changes
- Follow existing code style
- Update tests if needed
- Keep commits atomic

### Commit properly

```bash
git add .
git commit -m "feat: add email validation [ISSUE-123]"
```

**Commit message format:**

```
type(scope): description [ISSUE]
```

### Push changes

```bash
git push origin your-branch-name
```

## 📤 Submitting Changes

1. Create a **Pull Request** from your fork to the main repo
2. Fill out the PR template completely
3. Include:
   - Description of changes
   - Screenshots if UI changes
   - Reference issues with #
4. Wait for review and address feedback

## 🏷 Pull Request Labels
| Label       | Purpose                    |
|-------------|----------------------------|
| bug         | Fixes a bug                |
| enhancement | New feature                |
| docs        | Documentation changes      |
| question    | Seeking clarification      |

## 💡 Pro Tips
- Keep PRs focused on single purpose
- Sync with upstream regularly:
  ```bash
  git fetch upstream
  git merge upstream/main
  ```
- Be responsive to review comments

We appreciate your contribution! ❤️

```
