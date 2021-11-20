import React, { ComponentProps } from 'react';
import { FlatList, StyleSheet, TouchableWithoutFeedback, View, ViewStyle } from 'react-native';
import { Portal } from '@gorhom/portal';

import { Portals } from '../../constants/portals';
import { BORDER_WIDTH, COLORS, MAX_HEIGHT_LIST } from '../../constants/styles';
import type { OptionalToRequired } from '../../helpers';
import type { State } from '../../state/types';
import type { OnOutsidePress, OnPressOptionType } from '../../types';
import { NoOptions } from '../no-options';
import { Option } from '../option';
import type { Select } from '../select';

type FromSelectComponentProps = Pick<
    ComponentProps<typeof Select>,
    | 'flatListProps'
    | 'optionSelectedStyle'
    | 'optionStyle'
    | 'optionTextStyle'
    | 'noOptionsText'
    | 'onSelect'
    | 'optionsListStyle'
>;

type OptionsListProps = OptionalToRequired<
    FromSelectComponentProps &
        Pick<State, 'isOpened' | 'openedPosition' | 'optionsData' | 'selectedOption'> & {
            onOutsidePress: OnOutsidePress;
            onPressOption: OnPressOptionType;
        }
>;

export const OptionsList = ({
    flatListProps,
    onPressOption,
    selectedOption,
    isOpened,
    onOutsidePress,
    openedPosition: { width, top, left },
    optionsData,
    optionSelectedStyle,
    optionStyle,
    optionTextStyle,
    noOptionsText,
    onSelect,
    optionsListStyle,
}: OptionsListProps) => {
    return (
        <>
            {isOpened && (
                <>
                    <Portal hostName={Portals.SelectOutsideWrapper}>
                        <TouchableWithoutFeedback
                            accessibilityLabel={'Close a dropdown from outside'}
                            onPress={onOutsidePress}>
                            <View style={styles.modalOverlay} />
                        </TouchableWithoutFeedback>
                    </Portal>
                    <Portal hostName={Portals.Select}>
                        <FlatList
                            accessibilityLabel={'Options list'}
                            bounces={false}
                            data={optionsData}
                            keyExtractor={({ value }) => value}
                            keyboardShouldPersistTaps="handled"
                            persistentScrollbar={true}
                            renderItem={({ item }) => {
                                const { value } = item;
                                return (
                                    <Option
                                        isSelected={value === selectedOption?.value}
                                        key={value}
                                        onPressOption={onPressOption}
                                        onSelect={onSelect}
                                        option={item}
                                        optionSelectedStyle={optionSelectedStyle}
                                        optionStyle={optionStyle}
                                        optionTextStyle={optionTextStyle}
                                    />
                                );
                            }}
                            style={[styles.options, optionsListStyle, { top, left, width }]}
                            {...flatListProps}
                            ListEmptyComponent={<NoOptions noOptionsText={noOptionsText} />}
                        />
                    </Portal>
                </>
            )}
        </>
    );
};

type Styles = {
    modalOverlay: ViewStyle;
    options: ViewStyle;
};

const styles = StyleSheet.create<Styles>({
    modalOverlay: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1,
    },
    options: {
        flex: 1,
        position: 'absolute',
        zIndex: 1,
        backgroundColor: COLORS.WHITE,
        borderWidth: BORDER_WIDTH,
        maxHeight: MAX_HEIGHT_LIST,
        elevation: 5,
    },
});