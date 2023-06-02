import { createContext, useContext, useState } from 'react';

const ProjectContext = createContext();

export function useProjectContext() {
  return useContext(ProjectContext);
}

export function ProjectProvider({ children }) {
  const [projectData, setProjectData] = useState(null);

  async function fetchProjectData(projectId) {
    try {
      const response = await fetch(`https://marifx.com/api/projects/${projectId}`);
      const data = await response.json();
      setProjectData(data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ProjectContext.Provider value={{ projectData, fetchProjectData }}>
      {children}
    </ProjectContext.Provider>
  );
}
