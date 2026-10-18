export interface ResearchEntry {
  title: string;
  type: string;
  summary: string;
  keyResults: string[];
  stack: string[];
  status: string;
  githubUrl?: string;
}

export const research: ResearchEntry[] = [
  {
    title: "SleepMamba Reproduction",
    type: "Research / Paper Reproduction",
    summary:
      "An independent reproduction of SleepMamba, a lightweight Mamba-based state-space model for automated sleep staging from raw EEG/EOG/EMG signals, rebuilt entirely from the published paper to check which of its claims hold up when reimplemented from the text alone.",
    keyResults: [
      "Preprocessed 153 PhysioNet Sleep-EDF recordings — epoch counts matched the original paper to 99.84%.",
      "Reimplemented the three-stage architecture (multiscale CNN, Dual-Axis Mamba, Bi-Mamba) directly from the paper's equations.",
      "Verified the custom Mamba implementation against the official CUDA kernels (max difference ~4.5×10⁻⁸).",
      "Ran 120+ training runs across subject-level 10-fold cross-validation, reproducing 6 of the paper's 8 reported experiments.",
    ],
    stack: [
      "Python",
      "PyTorch",
      "mamba-ssm",
      "causal-conv1d",
      "MNE-Python",
      "NumPy",
      "scikit-learn",
      "Matplotlib",
      "Kaggle (T4 GPU)",
    ],
    status: "Sleep-EDF results complete — SHHS1 extension pending dataset access",
    githubUrl: "https://github.com/Matee-ur-Rehman/Sleep-Mamba",
  },
];