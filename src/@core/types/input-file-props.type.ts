import * as DocumentPicker from 'expo-document-picker';

export interface InputFileProps {
    type?: "file";
    value?: { canceled: boolean; assets: any[] };
    onChange?: (value: { canceled: boolean; assets: any[] }) => void;
}