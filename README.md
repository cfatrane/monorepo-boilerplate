# Turborepo React Native and Next Starter

This repository is a monorepo setup using [Turborepo](https://turbo.build/) to streamline the development of React Native and Next.js applications with shared packages and configurations. It is designed to support both mobile and web development with a unified codebase.

## Project Structure

The monorepo is organized into two main categories: **apps** and **packages**.

### **Apps**

- **`native`**: A [React Native](https://reactnative.dev/) app built using [Expo](https://docs.expo.dev/). This app is designed for mobile platforms (iOS and Android) and uses shared components and configurations from the `@repo/ui` and `@repo/typescript-config` packages.
- **`web`**: A [Next.js](https://nextjs.org/) app built with [react-native-web](https://necolas.github.io/react-native-web/). This app allows you to reuse React Native components for the web, ensuring consistency across platforms.

### **Packages**

- **`@repo/ui`**: A shared component library built with [React Native](https://reactnative.dev/). It provides reusable UI components that work seamlessly across both `native` and `web` apps.
- **`@repo/database`**: A shared database layer using [Prisma](https://www.prisma.io/) for database access. This package centralizes database logic and can be used by both apps.
- **`@repo/typescript-config`**: Centralized TypeScript configurations (`tsconfig.json`) shared across the monorepo to ensure consistent type checking and build settings.
- **`@repo/eslint-config`**: A shared ESLint configuration to enforce consistent code quality and formatting across all apps and packages.

---

## Tools and Technologies

### **Core Tools**

- **[Turborepo](https://turbo.build/)**: Used for managing the monorepo, caching builds, and running tasks efficiently across apps and packages.
- **[TypeScript](https://www.typescriptlang.org/)**: Provides static type checking for all apps and packages.
- **[Prettier](https://prettier.io/)**: Ensures consistent code formatting across the codebase.
- **[ESLint](https://eslint.org/)**: Enforces code quality and best practices.

### **Apps**

#### **Native (React Native with Expo)**

- **[Expo](https://docs.expo.dev/)**: Simplifies React Native development with tools for building, testing, and deploying mobile apps.
- **[React Native](https://reactnative.dev/)**: The core framework for building mobile apps.
- **[React Native Web](https://necolas.github.io/react-native-web/)**: Allows React Native components to be rendered on the web.

#### **Web (Next.js)**

- **[Next.js](https://nextjs.org/)**: A React framework for building server-rendered and static web applications.
- **[React Native Web](https://necolas.github.io/react-native-web/)**: Enables the reuse of React Native components in the web app.

### **Packages**

#### **UI Components**

- **[React](https://reactjs.org/)**: The core library for building user interfaces.
- **[React Native](https://reactnative.dev/)**: Used for building cross-platform components.
- **[Tsup](https://tsup.egoist.dev/)**: A fast bundler for building the `@repo/ui` package.

#### **Database**

- **[Prisma](https://www.prisma.io/)**: A modern ORM for database access, used in the `@repo/database` package.
- **[PostgreSQL](https://www.postgresql.org/)** (or any other database): The database backend used with Prisma.

#### **Shared Configurations**

- **TypeScript Configurations**: Centralized in `@repo/typescript-config` to ensure consistent settings across the monorepo.
- **ESLint Configurations**: Centralized in `@repo/eslint-config` to enforce consistent linting rules.

---

## How Packages and Tools Are Shared

1. **Shared Components**: The `@repo/ui` package provides reusable components that are imported into both the `native` and `web` apps. This ensures a consistent design system across platforms.
2. **Database Access**: The `@repo/database` package centralizes all database logic, allowing both apps to interact with the same database layer.
3. **TypeScript Configurations**: All apps and packages extend the base configurations from `@repo/typescript-config`, ensuring consistent type checking and build settings.
4. **ESLint Configurations**: All apps and packages use the shared ESLint rules from `@repo/eslint-config` to maintain code quality.
5. **React Native Web**: The `web` app uses `react-native-web` to render React Native components on the web, enabling code reuse between `native` and `web`.

---

## Getting Started

### **Install Dependencies**

Run the following command at the root of the monorepo to install all dependencies:

```bash
bun install
```

---

Based on the [Turborepo Basic Example](https://github.com/vercel/turborepo/tree/main/examples/basic) combined to the [Turborepo React Native Example](https://github.com/vercel/turborepo/tree/main/examples/with-react-native-web)
