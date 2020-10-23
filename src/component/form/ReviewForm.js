import React from 'react';
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

const ReviewSchema = yup.object({
  title: yup.string().required().min(4).max(8),
  body: yup.string().required().min(8),
  rating: yup
    .string()
    .required()
    .test('is-num-1-5', 'Rating must be a number b/w 1 to 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    }),
});

const ReviewForm = () => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{padding: 10}}>
        <Formik
          initialValues={{title: '', body: '', rating: ''}}
          validationSchema={ReviewSchema}
          onSubmit={(values, actions) => {
            console.log(values);
            actions.resetForm();
          }}>
          {(props) => (
            <View>
              <TextInput
                style={{borderBottomWidth: 1}}
                placeholder="Review title"
                onChangeText={props.handleChange('title')}
                onBlur={props.handleBlur('title')}
                value={props.values.title}
              />
              <Text style={{color: 'red'}}>
                {props.touched.title && props.errors.title}
              </Text>
              <TextInput
                multiline
                style={{borderBottomWidth: 1}}
                placeholder="Review body"
                onChangeText={props.handleChange('body')}
                onBlur={props.handleBlur('body')}
                value={props.values.body}
              />
              <Text style={{color: 'red'}}>
                {props.touched.body && props.errors.body}
              </Text>
              <TextInput
                style={{borderBottomWidth: 1, marginBottom: 15}}
                placeholder="Review rating"
                onChangeText={props.handleChange('rating')}
                onBlur={props.handleBlur('rating')}
                value={props.values.rating}
                keyboardType="numeric"
              />
              <Text style={{color: 'red'}}>
                {props.touched.rating && props.errors.rating}
              </Text>
              <Button
                title="submit"
                color={'maroon'}
                onPress={props.handleSubmit}
                //   onPress={() => console.log('click')}
              />
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ReviewForm;

const styles = StyleSheet.create({});
