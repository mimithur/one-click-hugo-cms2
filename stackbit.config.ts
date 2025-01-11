// stackbit.config.ts
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ["content"], // Ajusta este valor según tu carpeta de contenido
      models: [
        {
          name: "Page",
          type: "page",
          urlPath: "/{slug}",
          filePath: "content/pages/{slug}.json", // Ajusta según la ubicación y tipo de tus archivos
          fields: [
            { name: "title", type: "string", required: true },
            { name: "body", type: "markdown", required: true }
          ]
        }
      ],
    })
  ]
});
